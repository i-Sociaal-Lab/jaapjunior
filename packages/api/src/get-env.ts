export function getEnvOrThrow(key: string) {
	const value = process.env[key];
	if (!value) {
		throw new Error(`Missing environment variable: ${key}`);
	}

	return value;
}

export function getEnv(key: string) {
	const value = process.env[key];
	return value;
}
