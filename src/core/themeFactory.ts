import chroma from 'chroma-js'

import { mergedTextmateColors } from '../utils'

export function themeFactory(config: Theme) {
	const themeList: Theme[] = []

	const type = config.type

	const semanticHighlighting = true

	const uiTheme = config.uiTheme

	config.brightness = config.brightness ?? [0]

	config.brightness.forEach((level) => {
		let name = `shimmer-theme-${config.type}-${config.name}`

		let label = name
			.split('-')
			.map((s) => s[0].toUpperCase() + s.slice(1))
			.join(' ')

		let colors: Theme['colors'] | undefined = config.colors

		let include: string | undefined

		const semanticTokenColors = structuredClone(
			config.semanticTokenColors,
		) as Theme['semanticTokenColors']

		const tokenColors = structuredClone(
			mergedTextmateColors(config.tokenColors),
		) as Theme['tokenColors']

		if (level) {
			colors = undefined

			include = `./${name}.json`

			const ratio = level / 10

			name += `_${level}`

			label += ` ${String(level).padStart(2, '0')}`

			for (const token in semanticTokenColors) {
				const key = token as keyof typeof semanticTokenColors
				const tokenStyle = semanticTokenColors[key]

				if (
					tokenStyle &&
					typeof tokenStyle === 'object' &&
					tokenStyle.foreground
				) {
					tokenStyle.foreground = chroma(tokenStyle.foreground)
						.brighten(ratio)
						.hex()
				}
			}

			if (tokenColors) {
				for (let i = 0; i < tokenColors.length; i++) {
					const foreground = tokenColors[i].settings.foreground
					if (foreground) {
						tokenColors[i].settings.foreground = chroma(foreground)
							.brighten(ratio)
							.hex()
					}
				}
			}
		}

		const theme: Theme = structuredClone({
			name,
			label,
			type,
			uiTheme,
			include,
			colors,
			tokenColors,
			semanticHighlighting,
			semanticTokenColors,
		})

		themeList.push(theme)
	})

	return themeList
}
