<script setup lang="ts">
import { default as DOMPurify } from "dompurify";
import type { ChatMessage } from "llamaindex";
import { marked, Renderer, type Tokens } from "marked";

defineProps<{
	message: ChatMessage;
}>();

// Helper function to render markdown safely
function renderMarkdown(text: string): string {
	// Remove all content between <think> and </think> tags
	const regex = /<think>[\s\S]*?<\/think>/g;
	const sanitizedText = text.replace(regex, "");

	// Custom renderer to wrap tables in divs
	const renderer = new Renderer();
	renderer.table = (token: Tokens.Table) => {
		const header = token.header.map((cell) => `<th>${cell.text}</th>`).join("");
		const body = token.rows
			.map(
				(row) =>
					`<tr>${row.map((cell) => `<td>${cell.text}</td>`).join("")}</tr>`,
			)
			.join("");
		return `<div class="table-wrapper"><table><thead><tr>${header}</tr></thead><tbody>${body}</tbody></table></div>`;
	};

	const html = marked(sanitizedText, { renderer, async: false });
	DOMPurify.addHook("beforeSanitizeElements", (node) => {
		if (node instanceof HTMLAnchorElement) {
			node.setAttribute("target", "_blank");
			node.setAttribute("rel", "noopener noreferrer");
		}
	});

	return DOMPurify.sanitize(html, { ADD_ATTR: ["target"] });
}
</script>

<template>
	<div
		v-html="renderMarkdown(message.content as string)"
		class="markdown-content"
	></div>
</template>
