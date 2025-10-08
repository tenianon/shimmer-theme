type ColorKey =
	| 'primary'
	| `${'color'}${number}.${number}`
	| `${'color'}${number}`

declare type Color = Record<ColorKey, string>
