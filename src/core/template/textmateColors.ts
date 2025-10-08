import { baseColor, baseLanguageColor, baseSemanticColor } from '../color'

export const getTextmateColors = (
	color = baseColor,
	semanticColor = baseSemanticColor(baseColor),
	languageColor = baseLanguageColor,
): Theme['tokenColors'] => {
	const base = color
	const semantic = semanticColor
	const language = languageColor

	const group: Theme['tokenColors'] = [
		// {
		//   name: 'types',
		//   scope: [
		//     'entity.name.type',
		//     'entity.name.class',
		//     'support.type',
		//     'support.class',
		//   ],
		//   settings: {
		//     foreground: semantic.type,
		//   },
		// },
		{
			name: 'comments',
			scope: ['comment', 'punctuation.definition.comment'],
			settings: {
				foreground: semantic.comment,
			},
		},
		{
			name: 'strings',
			scope: ['string', 'meta.embedded.assembly'],
			settings: {
				foreground: semantic.string,
			},
		},
		{
			name: 'keyword',
			scope: [
				'keyword - keyword.operator',
				'keyword.control',
				'storage',
				'storage.type',
			],
			settings: {
				foreground: semantic.keyword,
			},
		},
		{
			name: 'numbers',
			scope: ['constant.numeric'],
			settings: {
				foreground: semantic.number,
			},
		},
		{
			name: 'functions',
			scope: ['entity.name.function', 'support.function'],
			settings: {
				foreground: semantic.function,
			},
		},
		{
			name: 'variables',
			scope: ['variable', 'entity.name.variable'],
			settings: {
				foreground: semantic.variable,
			},
		},
	]

	const unicode: Theme['tokenColors'] = [
		{
			name: 'unicode',
			scope: [
				'punctuation',
				'meta.brace',
				'keyword.operator',
				'storage.type.function.arrow',
				'constant.language.import-export-all',
			],
			settings: {
				foreground: base.color8,
			},
		},
	]

	const c: Theme['tokenColors'] = [
		{
			scope: ['source.c'],
			settings: {
				foreground: base.color9,
			},
		},
		{
			scope: ['source.c keyword.other.typedef.c'],
			settings: {
				foreground: semantic.keyword,
			},
		},
		{
			scope: [
				'source.c keyword.operator.sizeof.c',
				'source.c storage.type.class.doxygen.c',
			],
			settings: {
				foreground: semantic.namespace,
			},
		},
		{
			scope: ['source.c constant.character.escape.line-continuation.c'],
			settings: {
				foreground: language.html.character,
			},
		},

		{
			scope: ['source.c meta.parens.block.c'],
			settings: {
				foreground: semantic.enum,
			},
		},
	]

	const cpp: Theme['tokenColors'] = [
		{
			scope: ['source.cpp'],
			settings: {
				foreground: base.color9,
			},
		},
		{
			scope: [
				'source.cpp keyword.other.using.directive.cpp',
				'source.cpp keyword.other.typedef.cpp',
				'source.cpp keyword.operator.sizeof.cpp',
			],
			settings: {
				foreground: semantic.keyword,
			},
		},
		{
			scope: ['source.cpp keyword.other.unit'],
			settings: {
				foreground: semantic.number,
			},
		},
		{
			scope: [
				'entity.name.function.operator.member.cpp',
				'entity.name.function.operator.cpp',
				'source.cpp storage.modifier.reference.cpp',
				'source.cpp storage.modifier.pointer.cpp',
			],
			settings: {
				foreground: base.color8,
			},
		},
		{
			scope: ['source.cpp keyword.operator.cast'],
			settings: {
				foreground: semantic.enum,
			},
		},
	]

	const css: Theme['tokenColors'] = [
		{
			scope: ['source.css'],
			settings: {
				foreground: base.color9,
			},
		},
		{
			scope: [
				'punctuation.definition.entity.css',
				'punctuation.definition.entity.begin.bracket.square.css',
				'punctuation.definition.entity.end.bracket.square.css',
				'entity.other.attribute-name.attribute.css',
				'variable.parameter.misc.css',
			],
			settings: {
				foreground: base.color8,
			},
		},
		{
			scope: [
				'entity.other.attribute-name.class',
				'entity.other.attribute-name.id',
				'entity.other.attribute-name.placeholder',
				'entity.other.attribute-name.parent-selector-suffix punctuation.definition.entity',
			],
			settings: {
				foreground: semantic.variable,
			},
		},
		{
			scope: [
				'support.type.property-name',
				'support.type.property-name.media',
				'meta.at-rule.media.header',
				'meta.property-name',
			],
			settings: {
				foreground: semantic.property,
			},
		},
		{
			scope: [
				'support.constant.color.w3c-standard-color-name.css',
				'support.constant.property-value',
				'meta.property-value',
			],
			settings: {
				foreground: semantic.parameter,
			},
		},
		{
			scope: ['meta.function.gradient.invalid.deprecated.gradient'],
			settings: {
				foreground: semantic.function,
			},
		},
		{
			scope: [
				'keyword.operator.logical.and.media',
				'keyword.other.important',
				'keyword.other.important punctuation.separator',
				'keyword.operator.gradient',
				'invalid.deprecated.function',
			],
			settings: {
				foreground: semantic.keyword,
			},
		},
		{
			scope: [
				'constant.other.color.rgb-value',
				'support.constant.font-name',
				'variable.parameter.url',
			],
			settings: {
				foreground: semantic.string,
			},
		},
		{
			scope: [
				'entity.other.attribute-name.pseudo-element',
				'entity.other.attribute-name.pseudo-class',
			],
			settings: {
				foreground: semantic.type,
			},
		},
		{
			scope: ['support.constant.parity'],
			settings: {
				foreground: semantic.class,
			},
		},
		{
			scope: [
				'meta.at-rule.keyframes.body',
				'meta.attribute-selector entity.other.attribute-name',
			],
			settings: {
				foreground: language.html.character,
			},
		},
		{
			scope: ['support.constant.media', 'variable.parameter.keyframe-list'],
			settings: {
				foreground: semantic.namespace,
			},
		},
		{
			scope: ['variable.argument.css', 'variable.css'],
			settings: {
				foreground: semantic.typeParameter,
			},
		},
		{
			scope: [
				'meta.at-rule.header',
				'meta.at-rule.import',
				'meta.at-rule.else',
			],
			settings: {
				foreground: semantic.enum,
			},
		},
	]

	const go: Theme['tokenColors'] = [
		{
			scope: ['source.go'],
			settings: {
				foreground: base.color9,
			},
		},
		{
			scope: ['source.go entity.name.type.package.go'],
			settings: {
				foreground: language.html.tag,
			},
		},
		{
			scope: ['source.go keyword'],
			settings: {
				foreground: semantic.keyword,
			},
		},
		{
			scope: ['source.go variable.parameter.go'],
			settings: {
				foreground: semantic.parameter,
			},
		},
		{
			scope: ['source.go entity.name.type.go'],
			settings: {
				foreground: semantic.typeParameter,
			},
		},
		{
			scope: ['source.go storage.type', 'source.go entity.name.type.any.go'],
			settings: {
				foreground: semantic.type,
			},
		},
		{
			scope: ['source.go keyword'],
			settings: {
				foreground: semantic.keyword,
			},
		},
	]

	const html: Theme['tokenColors'] = [
		{
			scope: ['text.html.derivative meta.tag'],
			settings: {
				foreground: language.html.tag,
			},
		},
		{
			scope: [
				'entity.other.attribute-name',
				'invalid.illegal.character-not-allowed-here.html',
			],
			settings: {
				foreground: base.color8,
			},
		},
		{
			scope: ['text.html.derivative'],
			settings: {
				foreground: base.color9,
			},
		},
		{
			scope: ['punctuation.definition.entity', 'constant.character.entity'],
			settings: {
				foreground: language.html.character,
			},
		},
	]

	const js: Theme['tokenColors'] = [
		{
			scope: [
				'constant.language',
				'keyword.operator.expression',
				'keyword.operator.new',
				'meta.class meta.method.declaration entity.name.type.module',
				'meta.class meta.method.declaration support.type.builtin',
				'entity.name.label',
			],
			settings: {
				foreground: semantic.keyword,
			},
		},
		{
			scope: [
				'variable.other.property',
				'variable.other.object.property',
				'support.variable.property',
				'meta.object-literal.key',
			],
			settings: {
				foreground: semantic.property,
			},
		},
		{
			scope: ['support.type.object.module'],
			settings: {
				foreground: semantic.variable,
			},
		},
		{
			scope: ['constant.language.infinity', 'constant.language.nan'],
			settings: {
				foreground: semantic.number,
			},
		},
	]

	const jsdoc: Theme['tokenColors'] = [
		{
			scope: ['storage.type.class.jsdoc'],
			settings: {
				foreground: semantic.namespace,
			},
		},
		{
			scope: ['variable.other.link.underline.jsdoc'],
			settings: {
				foreground: semantic.comment,
			},
		},
		{
			scope: ['entity.name.type.instance.jsdoc'],
			settings: {
				foreground: semantic.type,
			},
		},
		{
			scope: ['variable.other.jsdoc'],
			settings: {
				foreground: semantic.parameter,
			},
		},
	]

	const json: Theme['tokenColors'] = [
		{
			scope: ['support.type.property-name.json'],
			settings: {
				foreground: semantic.property,
			},
		},
	]

	const jsx: Theme['tokenColors'] = [
		{
			scope: ['support.class.component'],
			settings: {
				foreground: language.jsx.component,
			},
		},
		{
			scope: ['entity.name.tag'],
			settings: {
				foreground: language.html.tag,
			},
		},
		{
			scope: ['meta.jsx.children'],
			settings: {
				foreground: base.color9,
			},
		},
	]

	const less: Theme['tokenColors'] = [
		{
			scope: ['source.css.less'],
			settings: {
				foreground: base.color9,
			},
		},
		{
			scope: ['punctuation.definition.entity.less'],
			settings: {
				foreground: base.color8,
			},
		},
		{
			scope: ['support.constant.color.w3c-special-color-keyword.less'],
			settings: {
				foreground: semantic.parameter,
			},
		},
		{
			scope: ['support.other.variable.less'],
			settings: {
				foreground: semantic.typeParameter,
			},
		},
		{
			scope: ['support.constant.media.less'],
			settings: {
				foreground: semantic.namespace,
			},
		},
		{
			scope: ['keyword.operator.logic.media.less'],
			settings: {
				foreground: semantic.keyword,
			},
		},
	]

	const md: Theme['tokenColors'] = [
		{
			scope: ['text.html.markdown', 'meta.paragraph.markdown'],
			settings: {
				foreground: base.color9,
			},
		},
		{
			scope: [
				'text.html.markdown punctuation.definition.heading.markdown',
				'text.html.markdown entity.name.section.markdown',
			],
			settings: {
				fontStyle: 'bold',
				foreground: semantic.function,
			},
		},
		{
			scope: [
				'text.html.markdown punctuation.definition.bold.markdown',
				'text.html.markdown markup.bold.markdown',
			],
			settings: {
				fontStyle: 'bold',
				foreground: semantic.parameter,
			},
		},
		{
			scope: [
				'text.html.markdown punctuation.definition.italic.markdown',
				'text.html.markdown markup.italic.markdown',
			],
			settings: {
				fontStyle: 'italic',
				foreground: semantic.type,
			},
		},
		{
			scope: [
				'text.html.markdown punctuation.definition.strikethrough.markdown',
				'text.html.markdown markup.strikethrough.markdown',
			],
			settings: {
				fontStyle: 'strikethrough',
				foreground: base.color7,
			},
		},
		{
			scope: [
				'text.html.markdown punctuation.definition.list.begin.markdown',
				'text.html.markdown constant.other.reference.link.markdown',
			],
			settings: {
				foreground: semantic.number,
			},
		},
		{
			scope: [
				'text.html.markdown punctuation.definition.quote.begin.markdown',
				'text.html.markdown markup.quote.markdown meta.paragraph.markdown',
			],
			settings: {
				foreground: semantic.property,
			},
		},
		{
			scope: [
				'text.html.markdown markup.underline.link.markdown',
				'text.html.markdown markup.underline.link.image.markdown',
			],
			settings: {
				foreground: semantic.enum,
			},
		},
		{
			scope: [
				'text.html.markdown punctuation.definition.link.description',
				'text.html.markdown punctuation.definition.metadata.markdown',
				'text.html.markdown punctuation.definition.link.title',
				'text.html.markdown meta.link.reference.def.markdown punctuation.definition.constant.markdown',
				'text.html.markdown punctuation.definition.link.markdown',
				'text.html.markdown punctuation.definition.constant',
			],
			settings: {
				foreground: semantic.typeParameter,
			},
		},
		{
			scope: [
				'text.html.markdown punctuation.definition.raw.markdown',
				'text.html.markdown markup.inline.raw.string.markdown',
			],
			settings: {
				foreground: semantic.variable,
			},
		},
		{
			scope: [
				'text.html.markdown punctuation.definition.markdown',
				'text.html.markdown fenced_code.block.language.markdown',
				'text.html.markdown fenced_code.block.language',
			],
			settings: {
				foreground: semantic.namespace,
			},
		},

		{
			scope: [
				'text.html.markdown punctuation.separator.table.markdown',
				'text.html.markdown punctuation.definition.table.markdown',
			],
			settings: {
				foreground: language.vue.component,
			},
		},
		{
			scope: [
				'text.html.markdown constant.character.escape.markdown',
				'text.html.markdown punctuation.definition.math',
			],
			settings: {
				foreground: semantic.keyword,
			},
		},
		{
			scope: ['text.html.markdown meta.embedded.math.markdown'],
			settings: {
				foreground: semantic.class,
			},
		},
		{
			scope: ['text.html.markdown meta.separator.markdown'],
			settings: {
				foreground: language.html.character,
			},
		},
	]

	const py: Theme['tokenColors'] = [
		{
			scope: ['source.python'],
			settings: {
				foreground: base.color9,
			},
		},
		{
			scope: [
				'source.python constant.other.ellipsis.python',
				'source.python constant.character.format.placeholder.other.python',
			],
			settings: {
				foreground: base.color8,
			},
		},
		{
			scope: [
				'source.python string.quoted.docstring.multi.python keyword.control.flow.python',
			],
			settings: {
				foreground: semantic.string,
			},
		},
		{
			scope: ['source.python meta.attribute.python'],
			settings: {
				foreground: semantic.property,
			},
		},
		{
			scope: ['source.python support.variable.magic.python'],
			settings: {
				foreground: semantic.variable,
			},
		},
		{
			scope: ['source.python keyword.operator.logical'],
			settings: {
				foreground: semantic.keyword,
			},
		},
		{
			scope: ['source.python constant.character.escape.python'],
			settings: {
				foreground: language.html.character,
			},
		},
		{
			scope: ['source.python meta.function-call.generic.python'],
			settings: {
				foreground: semantic.function,
			},
		},
		{
			scope: ['source.python support.type.metaclass.python'],
			settings: {
				foreground: semantic.class,
			},
		},
		{
			scope: ['source.python meta.indexed-name.python'],
			settings: {
				foreground: semantic.variable,
			},
		},
	]

	const scss: Theme['tokenColors'] = [
		{
			scope: ['source.css.scss'],
			settings: {
				foreground: base.color9,
			},
		},
		{
			scope: ['entity.name.tag.reference.scss', 'meta.property-list.scss'],
			settings: {
				foreground: base.color8,
			},
		},
		{
			scope: [
				'meta.attribute-selector.scss',
				'meta.at-rule.include.scss support.constant.mathematical-symbols.scss',
				'meta.at-rule.include.scss keyword.operator.scss',
				'meta.at-rule.include.scss',
				'meta.at-rule.each.scss',
				'meta.at-rule.each.scss keyword.operator.css',
				'meta.at-rule.each.scss support.constant.mathematical-symbols.scss',
			],
			settings: {
				foreground: semantic.string,
			},
		},
		{
			scope: [
				'support.constant.mathematical-symbols.scss',
				'meta.property-value.scss',
			],
			settings: {
				foreground: semantic.type,
			},
		},
		{
			scope: [
				'meta.at-rule.mixin.scss',
				'meta.at-rule.if.scss',
				'keyword.other.default.scss',
			],
			settings: {
				foreground: semantic.keyword,
			},
		},
		{
			scope: ['meta.property-name.scss'],
			settings: {
				foreground: semantic.string,
			},
		},
		{
			scope: ['variable.scss'],
			settings: {
				foreground: semantic.typeParameter,
			},
		},
		{
			scope: [
				'meta.at-rule.keyframes.scss entity.other.attribute-name.scss',
				'support.constant.vendored.property-value.scss',
			],
			settings: {
				foreground: semantic.number,
			},
		},
		{
			scope: ['meta.at-rule.media.scss', 'meta.definition.variable.scss'],
			settings: {
				foreground: semantic.property,
			},
		},
		{
			scope: ['meta.at-rule.extend.scss'],
			settings: {
				foreground: semantic.namespace,
			},
		},
		{
			scope: [
				'source.css.scss entity.other.attribute-name.parent-selector-suffix.css punctuation.definition.entity.css',
			],
			settings: {
				foreground: semantic.variable,
			},
		},
	]

	const ts: Theme['tokenColors'] = [
		{
			scope: [
				'support.type.builtin.ts',
				'support.type.primitive.ts',
				'support.type.ts',
				'meta.type.annotation.ts',
				'meta.type.parameters.ts',
				'meta.return.type.ts',
				'meta.type.function.return.ts',
				'entity.name.type.ts',
				'entity.name.type.alias.ts',
				'entity.name.type.module.ts',
			],
			settings: {
				foreground: semantic.type,
			},
		},
		{
			scope: [
				'support.class.ts',
				'entity.other.inherited-class.ts',
				'entity.name.type.class.ts',
			],
			settings: {
				foreground: semantic.class,
			},
		},
	]

	const tsx: Theme['tokenColors'] = [
		{
			scope: [
				'support.type.builtin.tsx',
				'support.type.primitive.tsx',
				'meta.type.parameters.tsx',
				'entity.name.type.tsx',
				'entity.other.inherited-class.tsx',
				'entity.name.type.module.tsx',
			],
			settings: {
				foreground: semantic.type,
			},
		},
		{
			scope: ['entity.name.type.class.tsx', 'entity.other.inherited-class.tsx'],
			settings: {
				foreground: semantic.class,
			},
		},
	]

	const vue: Theme['tokenColors'] = [
		{
			scope: ['support.class.component.vue'],
			settings: {
				foreground: language.vue.component,
			},
		},
	]

	const rust: Theme['tokenColors'] = [
		{
			scope: ['source.rust'],
			settings: {
				foreground: color.color9,
			},
		},
		{
			scope: ['source.rust entity.name.type.rust'],
			settings: {
				foreground: semantic.type,
			},
		},
		{
			scope: ['source.rust entity.name.type.lifetime.rust'],
			settings: {
				foreground: language.html.tag,
			},
		},
		{
			scope: ['source.rust entity.name.namespace.rust'],
			settings: {
				foreground: semantic.namespace,
			},
		},
		{
			scope: ['source.rust meta.function.call.rust'],
			settings: {
				foreground: semantic.property,
			},
		},
		{
			scope: ['source.rust entity.name.type.numeric.rust'],
			settings: {
				foreground: semantic.number,
			},
		},
		{
			scope: ['source.rust entity.name.type.primitive.rust'],
			settings: {
				foreground: semantic.string,
			},
		},
		{
			scope: ['source.rust constant.other.caps.rust'],
			settings: {
				foreground: semantic.class,
			},
		},
	]

	return [
		...group,
		...unicode,
		...c,
		...cpp,
		...css,
		...go,
		...html,
		...js,
		...jsdoc,
		...json,
		...jsx,
		...less,
		...md,
		...py,
		...scss,
		...ts,
		...tsx,
		...vue,
		...rust,
	]
}
