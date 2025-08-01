<script setup lang="ts">
import TheChat from "../components/TheChat.vue";
</script>

<template>
	<main>
		<TheChat class="chat" />
	</main>
</template>

<style scoped>
main {
	position: relative;
}

.chat {
	max-width: 800px;
}
</style>
