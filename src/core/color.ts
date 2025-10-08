import chroma from 'chroma-js'

export const baseColor: Color = {
	color0: '#0a0b0a',
	color1: '#1a1b1a',
	color2: '#2a2b2a',
	color3: '#3a3b3a',
	color4: '#4a4b4a',
	color5: '#5a5b5a',
	color6: '#6a6b6a',
	color7: '#7a7b7a',
	color8: '#8a8b8a',
	color9: '#9a9b9a',
	color10: '#aaabaa',
	color11: '#babbba',
	color12: '#cacbca',
	color13: '#dadbda',
	color14: '#eaebea',
	color15: '#fafbfa',
	primary: '#8565ff',
}

export const baseBlockColor = (color = baseColor): Color => {
	return {
		...color,
		'color2.25': chroma.mix(color.color2, color.color3, 0.25, 'rgb').hex(),
		'color2.50': chroma.mix(color.color2, color.color3, 0.5, 'rgb').hex(),
		'color2.75': chroma.mix(color.color2, color.color3, 0.75, 'rgb').hex(),
		'color3.25': chroma.mix(color.color3, color.color4, 0.25, 'rgb').hex(),
		'color3.50': chroma.mix(color.color3, color.color4, 0.5, 'rgb').hex(),
		'color4.50': chroma.mix(color.color4, color.color5, 0.5, 'rgb').hex(),
	}
}

export const baseSemanticColor = (
	color = baseColor,
): Partial<Record<keyof SemanticTokenColors, string>> => {
	return {
		class: '#4495eb',
		comment: color.color6,
		decorator: '#ff0000',
		enum: '#389fad',
		enumMember: '#389fad',
		event: '#ff0000',
		function: '#8d85f0',
		interface: '#bf8286',
		keyword: '#c27cb3',
		label: '#ff0000',
		macro: '#ff0000',
		method: '#8d85f0',
		namespace: '#c28455',
		number: '#62a193',
		operator: '#ff0000',
		parameter: '#ba9959',
		property: '#689fc8',
		regexp: '#ff0000',
		string: '#1aa38f',
		struct: '#ff0000',
		type: '#bf8286',
		typeParameter: '#6ca371',
		variable: '#a980cd',
	}
}

export const baseLanguageColor = {
	html: {
		character: '#80a341',
		tag: '#d97189',
	},
	jsx: {
		component: '#149eca',
	},
	py: {
		classBuiltin: '#149dc9',
	},
	vue: {
		component: '#5aab81',
	},
} as const
