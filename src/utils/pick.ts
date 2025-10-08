export const pick = (obj: Record<string, any>, keys: string[]) => {
	return keys.reduce<Record<string, any>>((acc, key) => {
		acc[key] = obj[key]
		return acc
	}, {})
}
