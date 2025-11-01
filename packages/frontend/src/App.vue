<script setup lang="ts">
import { onMounted, ref } from "vue";
import { RouterView } from "vue-router";
import TheAuthDialog from "@/components/TheAuthDialog.vue";
import { useApi } from "@/composables/useApi";
import { useAuthStore } from "./store/useAuth";

const api = useApi();
const authStore = useAuthStore();
const showLoginModal = ref<boolean | null>(null);
const loginError = ref<string>("");
onMounted(async () => {
	try {
		// Add timeout to prevent hanging
		const controller = new AbortController();
		const timeoutId = setTimeout(() => controller.abort(), 5000);

		// Use window.location.origin - nginx proxy forwards /api/ to public Railway API
		const apiBaseUrl = window.location.origin;

		const res = await fetch(`${apiBaseUrl}/api/v1/authenticated`, {
			signal: controller.signal,
		});

		clearTimeout(timeoutId);

		if (!res.ok) {
			showLoginModal.value = true;
		} else {
			showLoginModal.value = false;
		}
	} catch (error) {
		// If API call fails, show login modal
		console.error("Failed to check authentication:", error);
		showLoginModal.value = true;
	}
});

async function login(password: string) {
	const res = await authStore.login(password);

	if (res.ok) {
		showLoginModal.value = false;
		loginError.value = "";
	} else {
		showLoginModal.value = true;
		if (res.status === 401) {
			loginError.value = "Onjuist wachtwoord. Probeer het opnieuw.";
		} else {
			loginError.value =
				"Er is een fout opgetreden. Probeer het later opnieuw.";
		}
	}
}
</script>

<template>
	<UApp>
		<template v-if="showLoginModal !== null">
			<RouterView />
			<TheAuthDialog v-model:open="showLoginModal" :error-message="loginError" @login="login" @clear-error="loginError = ''" />
		</template>
	</UApp>
</template>
