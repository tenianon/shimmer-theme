import {
	baseBlockColor,
	getSemanticTokenColors,
	getTextmateColors,
	getWorkbenchBlockConfig,
} from '../../../core'

export const melancholyBlock: Theme = {
	brightness: [0, 5, 10],
	colors: getWorkbenchBlockConfig(baseBlockColor()),
	name: 'melancholy-block',
	semanticTokenColors: getSemanticTokenColors(),
	tokenColors: getTextmateColors(),
	type: 'dark',
	uiTheme: 'vs-dark',
}
