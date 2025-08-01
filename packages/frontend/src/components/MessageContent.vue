<script setup lang="ts">
import { default as DOMPurify } from "dompurify";
import type { ChatMessage } from "llamaindex";
import { marked } from "marked";

defineProps<{
	message: ChatMessage;
}>();

// Helper function to render markdown safely
function renderMarkdown(text: string): string {
	// Remove all content between <think> and </think> tags
	const regex = /<think>[\s\S]*?<\/think>/g;
	const sanitizedText = text.replace(regex, "");
	const html = marked(sanitizedText, { async: false });
	DOMPurify.addHook("beforeSanitizeElements", (node) => {
		if (node instanceof HTMLAnchorElement) {
			node.setAttribute("target", "_blank");
			node.setAttribute("rel", "noopener noreferrer");
		}
	});

	// Sanitize HTML to prevent XSS attacks
	return DOMPurify.sanitize(html, { ADD_ATTR: ["target"] });
}
</script>

<template>
	<div
		v-html="renderMarkdown(message.content as string)"
		class="markdown-content"
	></div>
</template>
