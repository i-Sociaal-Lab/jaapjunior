<script setup lang="ts">
import TheAuthDialog from "@/components/TheAuthDialog.vue";
import { useApi } from "@/composables/useApi";
import { onMounted, ref } from "vue";
import { RouterView } from "vue-router";
import { useAuthStore } from "./store/useAuth";

const api = useApi();
const authStore = useAuthStore();
const showLoginModal = ref<boolean | null>(null);
onMounted(async () => {
	const res = await api.$get();

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
	} else {
		showLoginModal.value = true;
	}
}
</script>

<template>
	<UApp>
		<template v-if="showLoginModal !== null">
			<RouterView />
			<TheAuthDialog v-model:open="showLoginModal" @login="login" />
		</template>
	</UApp>
</template>
