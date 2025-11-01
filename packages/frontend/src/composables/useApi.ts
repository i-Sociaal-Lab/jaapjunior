import type { AppType } from "@jaap/api";
import { hc } from "hono/client";
import { useAuthStore } from "@/store/useAuth";

export function useApi() {
	const authStore = useAuthStore();

	// Always use window.location.origin - nginx proxy forwards /api/ to public Railway API
	const apiBaseUrl = window.location.origin;

	const {
		api: { v1: api },
	} = hc<AppType>(apiBaseUrl, {
		fetch: (input: RequestInfo | URL, requestInit?: RequestInit) => {
			const headers = new Headers(requestInit?.headers);
			if (authStore.jwt) {
				headers.set("Authorization", `Bearer ${authStore.jwt}`);
			}

			if (requestInit) {
				requestInit.headers = headers;
			}

			return fetch(input, requestInit);
		},
	});

	return api;
}
