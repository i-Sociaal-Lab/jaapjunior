import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { useApi } from "@/composables/useApi";

export const useAuthStore = defineStore("auth", () => {
	const jwt = useLocalStorage<string | null>("jwt", null);

	async function login(password: string) {
		const api = useApi();
		const res = await api.auth.$post({ json: { password } });
		if (!res.ok) {
			jwt.value = null;
			return res;
		}

		const { jwt: jwtValue } = await res.json();
		jwt.value = jwtValue;

		return res;
	}

	return { jwt, login };
});
