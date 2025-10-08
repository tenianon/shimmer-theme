import { baseColor, baseLanguageColor, baseSemanticColor } from '../color'

export const getSemanticTokenColors = (
	_color = baseColor,
	semanticColor = baseSemanticColor(baseColor),
	languageColor = baseLanguageColor,
): Theme['semanticTokenColors'] => {
	const semantic = semanticColor
	const language = languageColor

	const defaultSemantic: Theme['semanticTokenColors'] = {
		class: {
			foreground: semantic.class,
		},
		comment: {
			foreground: semantic.comment,
		},
		enum: {
			foreground: semantic.enum,
		},
		enumMember: {
			foreground: semantic.enumMember,
		},
		function: {
			foreground: semantic.function,
		},
		interface: {
			foreground: semantic.interface,
		},
		keyword: {
			foreground: semantic.keyword,
		},
		method: {
			foreground: semantic.method,
		},
		namespace: {
			foreground: semantic.namespace,
		},
		number: {
			foreground: semantic.number,
		},
		parameter: {
			foreground: semantic.parameter,
		},
		property: {
			foreground: semantic.property,
		},
		string: {
			foreground: semantic.string,
		},
		type: {
			foreground: semantic.type,
		},
		typeParameter: {
			foreground: semantic.typeParameter,
		},
		// decorator: {
		//   foreground: stc.decorator,
		// },
		// event: {
		//   foreground: stc.event,
		// },
		// label: {
		//   foreground: stc.label,
		// },
		// macro: {
		//   foreground: stc.macro,
		// },
		// operator: {
		//   foreground: stc.operator,
		// },
		// regexp: {
		//   foreground: stc.regexp,
		// },
		// struct: {
		//   foreground: stc.struct,
		// },
		variable: {
			foreground: semantic.variable,
		},
	}

	const c: Theme['semanticTokenColors'] = {
		'enum:c': {
			foreground: semantic.typeParameter,
		},
		'enumMember:c': {
			foreground: semantic.typeParameter,
		},
		'macro:c': {
			foreground: semantic.class,
		},
		'variable.global:c': {
			fontStyle: 'bold',
		},
	}

	const cpp: Theme['semanticTokenColors'] = {
		'enum:cpp': {
			foreground: semantic.typeParameter,
		},
		'enumMember:cpp': {
			foreground: semantic.typeParameter,
		},
		'templateType:cpp': {
			foreground: language.html.tag,
		},
		'variable.global:cpp': {
			fontStyle: 'bold',
		},
	}

	const py: Theme['semanticTokenColors'] = {
		'class.builtin:python': {
			foreground: language.py.classBuiltin,
		},
		'class.typeHint.builtin:python': {
			foreground: semantic.type,
		},
		'class:python': {
			foreground: semantic.class,
		},
		'magicFunction:python': {
			foreground: language.html.tag,
		},
		'module:python': {
			foreground: semantic.namespace,
		},
		'selfParameter:python': {
			foreground: semantic.typeParameter,
		},
	}

	const rs: Theme['semanticTokenColors'] = {
		'attributeBracket.attribute:rust': {
			foreground: baseColor.color8,
		},
		'generic.attribute:rust': {
			foreground: semantic.parameter,
		},
		'lifetime:rust': {
			foreground: language.html.tag,
		},
		'struct:rust': {
			foreground: semantic.class,
		},
	}

	return {
		...defaultSemantic,
		...c,
		...cpp,
		...py,
		...rs,
	}
}
