import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

import type { ExtensionContext } from 'vscode'
import { commands, Uri, window, workspace } from 'vscode'

export function registerParserColorThemeCommand(context: ExtensionContext) {
	const disposable = commands.registerCommand(
		'parserColorTheme.run',
		async () => {
			try {
				window.showInformationMessage('开始解析 VS Code Schema...')

				// 读取各个 schema 文件
				const tokenStylingUri = Uri.parse('vscode://schemas/token-styling')
				const tokenStylingDoc =
					await workspace.openTextDocument(tokenStylingUri)
				const tokenStylingSchema = JSON.parse(tokenStylingDoc.getText())

				const colorThemeUri = Uri.parse('vscode://schemas/color-theme')
				const colorThemeDoc = await workspace.openTextDocument(colorThemeUri)
				const colorThemeSchema = JSON.parse(colorThemeDoc.getText())

				const workbenchColorsUri = Uri.parse(
					'vscode://schemas/workbench-colors',
				)
				const workbenchColorsDoc =
					await workspace.openTextDocument(workbenchColorsUri)
				const workbenchColorsSchema = JSON.parse(workbenchColorsDoc.getText())

				const textmateColorsUri = Uri.parse('vscode://schemas/textmate-colors')
				const textmateColorsDoc =
					await workspace.openTextDocument(textmateColorsUri)
				const textmateColorsSchema = JSON.parse(textmateColorsDoc.getText())

				// 生成各类型定义
				const semanticTokenStyleType =
					generateSemanticTokenStyleType(tokenStylingSchema)
				const workbenchColorsType = generateWorkbenchColorsType(
					workbenchColorsSchema,
				)
				const semanticTokenColorsType =
					generateSemanticTokenColorsType(tokenStylingSchema)
				const textmateColorsType =
					generateTextmateColorsType(textmateColorsSchema)
				const themeType = generateColorThemeType(colorThemeSchema)

				// 组合类型定义
				const banner = `// Auto-generated from VS Code schemas using custom parser
// Generated at: ${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}
// Sources:
//   - vscode://schemas/color-theme
//   - vscode://schemas/token-styling
//   - vscode://schemas/workbench-colors
//   - vscode://schemas/textmate-colors
`
				const typeContent =
					banner +
					semanticTokenStyleType +
					'\n\n' +
					workbenchColorsType +
					'\n' +
					semanticTokenColorsType +
					'\n' +
					textmateColorsType +
					'\n' +
					themeType

				// 保存到文件
				const projectRoot = join(__dirname, '..')
				const typesDir = join(projectRoot, 'src', 'types')

				if (!existsSync(typesDir)) {
					mkdirSync(typesDir, { recursive: true })
				}

				const outputPath = join(typesDir, 'colorTheme.d.ts')
				writeFileSync(outputPath, typeContent, 'utf-8')

				window.showInformationMessage(
					'解析完成！\n' + '文件: src/types/colorTheme.d.ts',
				)

				const doc = await workspace.openTextDocument(outputPath)
				await window.showTextDocument(doc)
			} catch (error) {
				window.showErrorMessage(`解析失败: ${(error as Error).message}`)
				console.error(error)
			}
		},
	)

	context.subscriptions.push(disposable)
}

// 递归解析 schema 中的 $ref 引用
function resolveRef(obj: any, schema: any): any {
	if (!obj.$ref) {
		return obj
	}

	const refPath = obj.$ref.replace('#/', '').split('/')
	let refDef: any = schema
	for (const pathKey of refPath) {
		refDef = refDef?.[pathKey]
	}

	// 递归解析，防止循环引用
	if (refDef?.$ref && refDef.$ref !== obj.$ref) {
		return resolveRef(refDef, schema)
	}

	return refDef || obj
}

// 生成 SemanticTokenStyle 类型
function generateSemanticTokenStyleType(schema: any): string {
	const styleDef = schema.definitions?.style || {}
	const properties = styleDef.properties || {}

	let objectType = '{\n'

	for (const [key, prop] of Object.entries(properties) as [string, any][]) {
		const actualProp = resolveRef(prop, schema)

		if (actualProp.description) {
			objectType += `  /** ${actualProp.description} */\n`
		}

		let propType = 'any'
		if (actualProp.type === 'boolean') {
			propType = 'boolean'
		} else if (actualProp.type === 'string') {
			if (key === 'fontStyle' && actualProp.pattern) {
				propType = `'' | 'italic' | 'bold' | 'underline' | 'strikethrough' | 'italic bold' | 'italic underline' | 'italic strikethrough' | 'bold underline' | 'bold strikethrough' | 'underline strikethrough' | 'italic bold underline' | 'italic bold strikethrough' | 'italic underline strikethrough' | 'bold underline strikethrough' | 'italic bold underline strikethrough'`
			} else {
				propType = 'string'
			}
		}

		objectType += `  ${key}?: ${propType}\n`
	}

	objectType += '}'

	return `
declare type SemanticTokenStyle = string | ${objectType}`
}

// 生成 WorkbenchColors 类型
function generateWorkbenchColorsType(schema: any): string {
	const properties = schema.properties || {}
	const colorKeys = Object.keys(properties).sort()

	let typeContent = 'declare interface WorkbenchColors {\n'

	for (const key of colorKeys) {
		const property = properties[key]
		if (property?.description) {
			let desc = property.description.split('\n')[0]
			if (desc.endsWith('.') || desc.endsWith('。')) {
				desc = desc.slice(0, -1)
			}
			typeContent += `  /** ${desc} */\n`
		}
		typeContent += `  '${key}'?: string\n`
	}

	typeContent += '}\n'

	return typeContent
}

// 生成 SemanticTokenColors 类型
function generateSemanticTokenColorsType(tokenStylingSchema: any): string {
	const properties = tokenStylingSchema.properties || {}
	const tokenKeys = Object.keys(properties).sort()

	let typeContent = 'declare interface SemanticTokenColors {\n'

	for (const key of tokenKeys) {
		const property = properties[key]
		if (property?.description) {
			const desc = property.description.split('\n')[0]
			typeContent += `  /** ${desc} */\n`
		}
		const quotedKey = key.includes('.') || key.includes('*') ? `'${key}'` : key
		typeContent += `  ${quotedKey}?: SemanticTokenStyle\n`
	}

	typeContent += '}\n'

	return typeContent
}

// 生成 TokenColor 类型
function generateTextmateColorsType(schema: any): string {
	const tokenColorsDef = schema.items || {}
	const properties = tokenColorsDef.properties || {}

	let typeContent = 'declare interface TextmateColors {\n'

	for (const [key, prop] of Object.entries(properties) as [string, any][]) {
		const actualProp: any = resolveRef(prop, schema)

		if (actualProp.description) {
			const desc = actualProp.description.split('\n')[0]
			typeContent += `  /** ${desc} */\n`
		}

		const isRequired = tokenColorsDef.required?.includes(key)
		const optional = isRequired ? '' : '?'

		let propType = 'any'

		if (actualProp.anyOf) {
			if (key === 'scope') {
				propType = 'string | string[]'
			}
		} else if (actualProp.type === 'string') {
			propType = 'string'
		} else if (actualProp.type === 'object') {
			propType = generateObjectType(actualProp, schema, 1)
		} else if (actualProp.properties) {
			propType = generateObjectType(actualProp, schema, 1)
		}

		typeContent += `  ${key}${optional}: ${propType}\n`
	}

	typeContent += '}\n'
	return typeContent
}

// 生成嵌套对象类型
function generateObjectType(objDef: any, schema: any, indent: number): string {
	const properties = objDef.properties || {}
	if (Object.keys(properties).length === 0) {
		return '{}'
	}

	const indentStr = '  '.repeat(indent)
	let objType = '{\n'

	for (const [key, prop] of Object.entries(properties) as [string, any][]) {
		const actualProp: any = resolveRef(prop, schema)

		if (actualProp.description) {
			const desc = actualProp.description.split('\n')[0]
			objType += `${indentStr}  /** ${desc} */\n`
		}

		let propType = 'any'
		if (actualProp.type === 'boolean') {
			propType = 'boolean'
		} else if (actualProp.type === 'string') {
			if (key === 'fontStyle' && actualProp.pattern) {
				propType = `'' | 'italic' | 'bold' | 'underline' | 'strikethrough' | 'italic bold' | 'italic underline' | 'italic strikethrough' | 'bold underline' | 'bold strikethrough' | 'underline strikethrough' | 'italic bold underline' | 'italic bold strikethrough' | 'italic underline strikethrough' | 'bold underline strikethrough' | 'italic bold underline strikethrough'`
			} else {
				propType = 'string'
			}
		} else if (actualProp.type) {
			propType = actualProp.type
		}

		objType += `${indentStr}  ${key}?: ${propType}\n`
	}

	objType += `${indentStr}}`
	return objType
}

// 生成 Theme 主类型
function generateColorThemeType(schema: any): string {
	const properties = schema.properties || {}

	let typeContent = 'declare interface ColorTheme {\n'

	if (properties.name) {
		typeContent += '  name: string\n'
	}

	if (properties.type) {
		typeContent += "  type: 'dark' | 'light'\n"
	}

	if (properties.uiTheme) {
		typeContent += "  uiTheme?: 'vs' | 'vs-dark' | 'hc-black' | 'hc-light'\n"
	}

	if (properties.include) {
		typeContent += '  include?: string\n'
	}

	typeContent += '  colors?: WorkbenchColors\n'

	if (properties.semanticHighlighting) {
		typeContent += '  semanticHighlighting?: boolean\n'
	}

	typeContent +=
		'  semanticTokenColors?: SemanticTokenColors & Record<string, SemanticTokenStyle | undefined>\n'
	typeContent += '  tokenColors?: TextmateColors[]\n'

	typeContent += '}\n'

	return typeContent
}
