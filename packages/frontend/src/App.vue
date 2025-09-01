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
	const res = await api.authenticated.$get();

	if (!res.ok) {
		showLoginModal.value = true;
	} else {
		showLoginModal.value = false;
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
