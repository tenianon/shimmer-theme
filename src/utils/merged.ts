export function mergedArray(array: Syntax[]) {
	return Object.values(
		array.reduce(
			(acc, { scope, settings }) => {
				const key = JSON.stringify(settings)
				if (!acc[key]) {
					acc[key] = { scope: [...scope], settings }
				} else {
					acc[key].scope.push(...scope)
				}
				return acc
			},
			{} as Record<string, { scope: string[]; settings: any }>,
		),
	)
}
