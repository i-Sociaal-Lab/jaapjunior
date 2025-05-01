<script setup lang="ts">
import { ref, useTemplateRef } from "vue";

defineProps<{
	placeholder: string;
	sendButton: string;
	loading: boolean;
	disabled: boolean;
	autofocus?: boolean;
}>();

const input = defineModel<string | undefined>();
const inputEl = useTemplateRef("input-el");

const models = ref([
	{ label: "Modellen beoordelen", id: "rate" },
	{ label: "GPT 4.1 nano", id: "4.1-nano" },
	{ label: "GPT 4.1", id: "4.1" },
	{ label: "Gemini 2.0 flash", id: "flash" },
]);
const selectedModel = defineModel<string>("selected-model");

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
            :autofocus
			:placeholder
			:disabled="loading"
		/>
		<div class="self-end flex gap-2">
			<USelectMenu
				v-model="selectedModel"
				value-key="id"
				:items="models"
				class="text-end hover:ring hover:ring-default hover:brightness-85 transition-all duration-150"
				:disabled="loading"
				:search-input="false"
				variant="none"
				:ui="{ content: 'w-48' }"
				:content="{ align: 'end' }"
			/>
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
	background-color: var(--background);
	backdrop-filter: blur(5px);
	max-width: 800px;
	border: 1px solid var(--border);
	border-radius: 20px 20px 0 0;
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

.send-button {
	background-color: var(--primary);
	color: var(--primary-foreground);
	border: none;
	border-radius: 20px;
	padding: 0 20px;
	cursor: pointer;
	font-weight: 500;
	transition: filter 0.2s;
}

.send-button:hover {
  filter: brightness(85%);
}

.send-button:disabled {
	background-color: var(--muted);
    color: var(--muted-foreground);
	cursor: not-allowed;
	opacity: 0.7;
}
</style>
