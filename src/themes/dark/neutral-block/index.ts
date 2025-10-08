import {
	baseBlockColor,
	baseSemanticColor,
	getSemanticTokenColors,
	getTextmateColors,
	getWorkbenchBlockConfig,
} from '../../../core'
import { color } from '../neutral'

export const neutralBlock: Theme = {
	brightness: [-2, 0, 5, 10],
	colors: getWorkbenchBlockConfig(baseBlockColor(color)),
	name: 'neutral-block',
	semanticTokenColors: getSemanticTokenColors(color, baseSemanticColor(color)),
	tokenColors: getTextmateColors(color, baseSemanticColor(color)),
	type: 'dark',
	uiTheme: 'vs-dark',
}
