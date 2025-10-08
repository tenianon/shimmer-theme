import { themeFactory } from '../core/themeFactory'
import { melancholy } from './dark/melancholy'
import { melancholyBlock } from './dark/melancholy-block'
import { modern } from './dark/modern'
import { neutral } from './dark/neutral'
import { neutralBlock } from './dark/neutral-block'

const themeConfigList: Theme[] = [
	melancholy,
	melancholyBlock,
	neutral,
	neutralBlock,
	modern,
]

export default themeConfigList.flatMap(themeFactory)
