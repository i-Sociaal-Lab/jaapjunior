import { useAuthStore } from "@/store/useAuth";
import type { AppType } from "@jaap/api";
import { hc } from "hono/client";

export function useApi() {
	const authStore = useAuthStore();

	const {
		api: { v1: api },
	} = hc<AppType>(import.meta.env.VITE_API_URL, {
		fetch: (input: RequestInfo | URL, requestInit?: RequestInit) => {
			const headers: Record<string, string> = {};
			if (authStore.jwt) {
				headers.Authorization = `Bearer ${authStore.jwt}`;
			}

			const fetchOpts = requestInit ?? {};
			fetchOpts.headers = {
				...fetchOpts.headers,
				...headers,
			};

			return fetch(input, fetchOpts);
		},
	});

	return api;
}
