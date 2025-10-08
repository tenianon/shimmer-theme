import {
	getSemanticTokenColors,
	getTextmateColors,
	getWorkbenchColors,
} from '../../../core'

export const melancholy: Theme = {
	brightness: [0, 5, 10],
	colors: getWorkbenchColors(),
	name: 'melancholy',
	semanticTokenColors: getSemanticTokenColors(),
	tokenColors: getTextmateColors(),
	type: 'dark',
	uiTheme: 'vs-dark',
}
