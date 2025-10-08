import type { ExtensionContext } from 'vscode'

import { registerParserColorThemeCommand } from './extractorJSONSchemaTypes'

export function activate(context: ExtensionContext) {
	registerParserColorThemeCommand(context)
}

export function deactivate() {}
