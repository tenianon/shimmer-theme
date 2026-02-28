type ColorKey =
	| 'primary'
	| `${'color'}${number}.${number}`
	| `${'color'}${number}`

type BaseColorKeys =
	| 'primary'
	| `color${0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15}`

declare type Color = Record<ColorKey, string> & Record<BaseColorKeys, string>
