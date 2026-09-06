import { registerParserColorThemeCommand } from './extractor-json-schema-types'

import type { ExtensionContext } from 'vscode'

export function activate(context: ExtensionContext) {
  registerParserColorThemeCommand(context)
}

export function deactivate() {}
