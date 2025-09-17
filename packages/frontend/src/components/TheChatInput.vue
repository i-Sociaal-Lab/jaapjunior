<script setup lang="ts">
import type { DropdownMenuItem, SelectMenuItem } from "@nuxt/ui";
import { nextTick, ref, useTemplateRef, watch } from "vue";

defineProps<{
	placeholder: string;
	sendButton: string;
	feedbackButton: string;
	loading: boolean;
	disabled: boolean;
	autofocus?: boolean;
}>();

const input = defineModel<string | undefined>();
const inputEl = useTemplateRef("input-el");

function autoResize() {
	if (inputEl.value) {
		inputEl.value.style.height = "auto";
		const newHeight = Math.min(inputEl.value.scrollHeight, 200);
		inputEl.value.style.height = `${newHeight}px`;
	}
}

watch(input, () => nextTick(() => autoResize()), { immediate: true });

nextTick(() => {
	autoResize();
});

const models = ref([
	{ label: "GPT 4.1", id: "4.1" },
	{ label: "Gemini 2.5 pro", id: "2.5-pro" },
	{ label: "Llama 4 Maverick", id: "llama-4" },
	{ label: "Mistral Medium", id: "mistral-medium" },
] satisfies SelectMenuItem[]);
const selectedModel = defineModel<string>("selected-model");

const modes = ref([
	{ label: "Modellen beoordelen", value: "rate" },
	{ label: "Model kiezen", value: "pick" },
]);
const mode = defineModel<"rate" | "pick">("mode");

watch(
	mode,
	(newMode) => {
		if (newMode === "pick") {
			selectedModel.value = models.value[0]?.id;
		} else {
			selectedModel.value = undefined;
		}
	},
	{ immediate: true },
);

const emit = defineEmits<{
	submit: [];
	feedback: [];
}>();

function focus() {
	inputEl.value?.focus();
}

function handleKeydown(event: KeyboardEvent) {
	if (event.key === "Enter") {
		if (event.shiftKey) {
			return;
		} else {
			event.preventDefault();
			emit("submit");
		}
	}
}

const canUseSelector = ref(false);
watch(
	canUseSelector,
	(value) => {
		if (!value) {
			mode.value = "pick";
			selectedModel.value = "4.1";
		}
	},
	{ immediate: true },
);

const resetItems = ref<DropdownMenuItem[]>([
	{
		label: "Nieuw gesprek",
		icon: "i-lucide-rotate-ccw",
		color: "neutral",
		variant: "outline",
		to: "/",
	},
]);
</script>

<template>
	<div class="input-container gap-2" @click="focus">
		<textarea
			v-model="input"
			ref="input-el"
			class="message-input"
			@keydown="handleKeydown"
			@input="autoResize"
			:autofocus
			:placeholder
			:disabled="loading"
			rows="1"
		></textarea>
		<div class="flex gap-2 justify-between">
			<div>
				<URadioGroup
					v-if="canUseSelector"
					v-model="mode"
					orientation="horizontal"
					indicator="hidden"
					variant="table"
					:items="modes"
					:ui="{
						item: 'p-2 first-of-type:rounded-l-md last-of-type:rounded-r-md',
					}"
				/>
				<UDropdownMenu
					:items="resetItems"
					:ui="{
						content: 'w-48',
					}"
				>
					<UButton icon="i-lucide-menu" color="neutral" variant="outline" />
				</UDropdownMenu>
			</div>

			<div class="flex gap-2 ml-auto">
				<USelectMenu
					v-if="canUseSelector && mode === 'pick'"
					v-model="selectedModel"
					value-key="id"
					:items="models"
					class="text-end hover:ring hover:ring-default hover:brightness-85 transition-all duration-150"
					:search-input="false"
					variant="none"
					:ui="{ content: 'w-48' }"
					:content="{ align: 'end' }"
				/>
				<UButton
					@click="emit('feedback')"
					class="rounded-full"
					variant="outline"
					icon="i-lucide-message-square"
					size="sm"
				>
					{{ feedbackButton }}
				</UButton>
				<UButton @click="emit('submit')" class="rounded-full" :disabled>
					{{ sendButton }}
				</UButton>
			</div>
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
	width: 100%;
	padding: 10px 14px;
	border: none;
	font-size: 14px;
	outline: none;
	resize: none;
	min-height: 20px;
	max-height: 200px;
	overflow-y: auto;
	line-height: 1.4;
	box-sizing: border-box;
}
</style>
