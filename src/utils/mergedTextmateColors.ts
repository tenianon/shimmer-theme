export function mergedTextmateColors(
	textmateColors?: TextmateColors[],
): TextmateColors[] {
	if (!textmateColors || textmateColors.length === 0) {
		return []
	}

	const normalizeScope = (scope?: string | string[]): string[] => {
		if (!scope) return []
		return Array.isArray(scope) ? scope : [scope]
	}

	const mergedMap = new Map<
		string,
		{ scope: string[]; settings: TextmateColors['settings'] }
	>()

	for (const item of textmateColors) {
		const key = JSON.stringify(item.settings)
		const normalizedScope = normalizeScope(item.scope)

		if (mergedMap.has(key)) {
			// biome-ignore lint/style/noNonNullAssertion: <explanation>
			const existing = mergedMap.get(key)!
			existing.scope.push(...normalizedScope)
		} else {
			mergedMap.set(key, {
				scope: [...normalizedScope],
				settings: item.settings,
			})
		}
	}

	return Array.from(mergedMap.values())
}
