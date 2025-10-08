declare interface Theme extends ColorTheme {
	include?: string
	label?: string
	name: string
	type: 'dark' | 'light'
	uiTheme: 'hc-black' | 'hc-light' | 'vs-dark' | 'vs'
	brightness?: number[]
}
