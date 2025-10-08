export default {
	input: 'src/extensions/index.ts',
	output: {
		file: 'dist/index.cjs',
		format: 'cjs',
	},
	external: ['node:path', 'node:fs', 'vscode'],
	platform: 'node',
}
