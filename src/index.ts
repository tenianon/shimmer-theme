import { existsSync } from 'node:fs'
import { copyFile, mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { join, resolve } from 'node:path'
import themeList from './themes'
import { pick } from './utils'

const themes: {
	label?: string
	path: string
	uiTheme: Theme['uiTheme']
}[] = []

async function deleteBuildFiles(directoryPath = 'build') {
	try {
		const buildPath = resolve(process.cwd(), directoryPath)

		if (existsSync(buildPath)) {
			await rm(buildPath, { recursive: true, force: true })
			console.log(`Deleted ${directoryPath} directory successfully`)
		}

		await mkdir(buildPath, { recursive: true })
		console.log(`Created ${directoryPath} directory`)
	} catch (e) {
		console.error('Error deleting files:', e)
		throw e
	}
}

async function copyBuildFiles() {
	const files = ['CHANGELOG.md', 'icon.png', 'LICENSE', 'README.md']

	const copyPromises = files.map(async (file) => {
		const filePath = join(process.cwd(), file)
		await copyFile(filePath, join(process.cwd(), 'build', file))
		console.log(`Copied file => ${filePath} to build successfully`)
	})

	await Promise.all(copyPromises)
}

async function writeThemeFile() {
	await mkdir('./build/themes', { recursive: true })

	const filePromises = themeList.map(async (config) => {
		try {
			const filterConfig = Object.fromEntries(
				Object.entries(config).filter(([_, value]) => value !== null),
			)

			await writeFile(
				`./build/themes/${config.name}.json`,
				JSON.stringify(filterConfig, null, 2),
				'utf-8',
			)

			themes.push({
				label: config.label,
				path: `./themes/${config.name}.json`,
				uiTheme: config.uiTheme,
			})

			console.log(
				`Create file => './build/themes/${config.name}.json' successfully`,
			)
		} catch (e) {
			console.error(
				`Error creating file => './build/themes/${config.name}.json':`,
				e,
			)
		}
	})

	await Promise.allSettled(filePromises)
}

async function generatePackageJson() {
	const packageJson = JSON.parse(
		await readFile(join(process.cwd(), 'package.json'), 'utf8'),
	)

	const pickPackageJson = pick(packageJson, [
		'name',
		'version',
		'description',
		'license',
		'engines',
	])

	const buildPackageJson = {
		...pickPackageJson,
		displayName: 'Shimmer Theme',
		author: {
			name: 'Nian',
		},
		repository: {
			type: 'github',
			url: 'https://github.com/tenianon/shimmer-theme',
		},
		homepage: 'https://github.com/tenianon/shimmer-theme/blob/main/README.md',
		publisher: 'Nian',
		categories: ['Themes'],
		keywords: ['theme', 'dark'],
		icon: 'icon.png',
		contributes: {
			themes: themes,
		},
	}

	await writeFile(
		join(process.cwd(), 'build', 'package.json'),
		JSON.stringify(buildPackageJson, null, 2),
		'utf8',
	)
	console.log('Create package.json successfully')
	console.log('------------------')
	console.log(new Date(Date.now()).toLocaleString('zh-CN'))
	console.log('------------------')
}

async function build() {
	try {
		await deleteBuildFiles()
		await copyBuildFiles()
		await writeThemeFile()
		generatePackageJson()
	} catch (error) {
		console.error(error)
	}
}

build()
