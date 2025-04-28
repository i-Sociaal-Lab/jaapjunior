<script setup lang="ts">
import { ref, useTemplateRef } from "vue";

defineProps<{
	placeholder: string;
	sendButton: string;
	loading: boolean;
	disabled: boolean;
}>();

const input = defineModel<string | undefined>();
const inputEl = useTemplateRef("input-el");

const models = ref<string[]>(["4.1-nano", "4.1"]);
const selectedModel = defineModel("selected-model", { default: "4.1-nano" });

defineEmits<{
	submit: [];
}>();

function focus() {
	inputEl.value?.focus();
}
</script>

<template>
	<div class="input-container" @click="focus">
		<input
			v-model="input"
			ref="input-el"
			class="message-input"
			@keyup.enter="$emit('submit')"
			:placeholder
			:disabled="loading"
		/>
		<div>
			<USelectMenu v-model="selectedModel" :items="models" class="w-48" :disabled="loading" />
			<button @click="$emit('submit')" class="send-button" :disabled>
				{{ sendButton }}
			</button>
		</div>
	</div>
</template>

<style scoped>
.input-container {
	display: flex;
	flex-direction: column;
	cursor: text;
	padding: 12px;
	width: 100%;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgba(255, 255, 255, 0.9);
	backdrop-filter: blur(5px);
	max-width: 800px;
	margin: 0 auto;
	left: 50%;
	transform: translateX(-50%);
	border: 1px solid var(--border);
	border-radius: 20px;
	transition: box-shadow 0.2s;
}

.input-container:focus-within {
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.message-input {
	flex: 1;
	padding: 10px 14px;
	border: none;
	font-size: 14px;
	outline: none;
}

.message-input:focus {
	border-color: #007bff;
}

.send-button {
	background-color: #007bff;
	color: white;
	border: none;
	border-radius: 20px;
	padding: 0 20px;
	cursor: pointer;
	font-weight: 500;
	transition: background-color 0.2s;
}

.send-button:hover {
	background-color: #0069d9;
}

.send-button:disabled {
	background-color: #cccccc;
	cursor: not-allowed;
	opacity: 0.7;
}
</style>
