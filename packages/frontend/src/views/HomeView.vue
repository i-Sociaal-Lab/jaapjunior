<script setup lang="ts">
import TheChat from "../components/TheChat.vue";
</script>

<template>
	<main>
		<div class="header">
			<router-link to="/">
				<img src="/ketenbureau.png" alt="Ketenbureau" class="logo ketenbureau-logo" />
			</router-link>
		</div>
		<TheChat class="chat" />
	</main>
</template>

<style scoped>
main {
	position: relative;
}

.header {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px;
	width: 100%;
	border-bottom: 1px solid var(--border);
	position: sticky;
	top: 0;
	z-index: 2;
	background-color: var(--background); 
	backdrop-filter: blur(5px);
}

.chat {
	max-width: 800px;
}

.logo {
	height: 60px;
	object-fit: contain;
}

.jaap-logo {
	margin-right: auto;
}

.ketenbureau-logo {
	margin-left: 20px;
}
</style>
