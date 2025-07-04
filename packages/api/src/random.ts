export function getRandomItems<T>(arr: T[], count: number): T[] {
	const array = [...arr];
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array.slice(0, count);
}

export function getRandomItem<T>(arr: T[]): T {
	return arr[Math.floor(Math.random() * arr.length)];
}
