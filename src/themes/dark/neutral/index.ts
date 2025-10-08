import {
	baseSemanticColor,
	getSemanticTokenColors,
	getTextmateColors,
	getWorkbenchColors,
} from '../../../core'

export const color = {
	color0: '#0a0b0a',
	color1: '#070707',
	color2: '#171717',
	color3: '#272727',
	color4: '#373737',
	color5: '#474747',
	color6: '#575757',
	color7: '#676767',
	color8: '#777777',
	color9: '#878787',
	color10: '#979797',
	color11: '#a7a7a7',
	color12: '#b7b7b7',
	color13: '#c7c7c7',
	color14: '#d7d7d7',
	color15: '#e7e7e7',
	primary: '#755ade',
} as const

export const neutral: Theme = {
	brightness: [-2, 0, 5, 10],
	colors: getWorkbenchColors(color),
	name: 'neutral',
	semanticTokenColors: getSemanticTokenColors(color, baseSemanticColor(color)),
	tokenColors: getTextmateColors(color, baseSemanticColor(color)),
	type: 'dark',
	uiTheme: 'vs-dark',
}
