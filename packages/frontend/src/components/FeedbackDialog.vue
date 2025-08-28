<script setup lang="ts">
import { nextTick, ref, watch } from "vue";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useApi } from "@/composables/useApi";

const props = defineProps<{
	messages: unknown[];
	open: boolean;
}>();

const emit = defineEmits<{
	close: [];
}>();

const feedback = ref<string>("");
const isSubmitting = ref(false);
const textareaRef = ref<HTMLTextAreaElement>();

const api = useApi();

// Focus the textarea when dialog opens
watch(
	() => props.open,
	async (isOpen) => {
		if (isOpen) {
			await nextTick();
			textareaRef.value?.focus();
		}
	},
);

const handleSubmit = async () => {
	if (!feedback.value.trim()) return;

	isSubmitting.value = true;
	try {
		await api.feedback.$post({
			json: {
				messageContent: feedback.value,
				conversationContent: props.messages,
			},
		});
		feedback.value = "";
		emit("close");
	} catch (error) {
		console.error("Failed to submit feedback:", error);
	} finally {
		isSubmitting.value = false;
	}
};
</script>

<template>
	<Dialog :open="open">
		<DialogContent
			class="sm:max-w-[500px]"
			:closeable="false"
			@pointer-down-outside="emit('close')"
			@escape-key-down="emit('close')"
		>
			<DialogHeader>
				<DialogTitle>Feedback versturen</DialogTitle>
				<DialogDescription>
					Deel uw feedback over het gesprek en/of Jaapjunior.
				</DialogDescription>
				<Button
					variant="ghost"
					size="sm"
					class="absolute right-4 top-4 h-6 w-6 p-0"
					@click="emit('close')"
				>
					<svg
						class="h-4 w-4"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
					>
						<path d="M18 6L6 18M6 6l12 12" />
					</svg>
					<span class="sr-only">Close</span>
				</Button>
			</DialogHeader>
			<form @submit.prevent="handleSubmit">
				<div class="grid gap-4 py-4">
					<div class="grid gap-2">
						<Label for="feedback">Uw feedback</Label>
						<textarea
							ref="textareaRef"
							id="feedback"
							v-model="feedback"
							rows="4"
							placeholder="Deel uw feedback over het gesprek..."
							class="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex w-full min-w-0 rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive resize-none"
							required
						/>
					</div>
				</div>
			</form>
			<DialogFooter>
				<Button variant="outline" @click="emit('close')">Annuleren</Button>
				<Button
					@click="handleSubmit"
					:disabled="isSubmitting || !feedback.trim()"
				>
					{{ isSubmitting ? "Verzenden..." : "Verstuur feedback" }}
				</Button>
			</DialogFooter>
		</DialogContent>
	</Dialog>
</template>
