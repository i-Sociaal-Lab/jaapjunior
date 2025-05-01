<script setup lang="ts">
import { default as DOMPurify } from "dompurify";
import type { ChatMessage } from "llamaindex";
import { marked } from "marked";

defineProps<{
	message: ChatMessage;
}>();

// Helper function to render markdown safely
function renderMarkdown(text: string): string {
	// Convert markdown to HTML
	const html = marked(text, { async: false });
	// Sanitize HTML to prevent XSS attacks
	return DOMPurify.sanitize(html);
}
</script>

<template>
    <div v-html="renderMarkdown(message.content as string)" class="markdown-content"></div>
</template>

