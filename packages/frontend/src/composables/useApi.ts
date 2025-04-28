import { useAuthStore } from "@/store/useAuth";
import type { AppType } from "@jaap/api";
import { hc } from "hono/client";

export function useApi() {
	const authStore = useAuthStore();

	const {
		api: { v1: api },
	} = hc<AppType>(window.location.origin, {
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
