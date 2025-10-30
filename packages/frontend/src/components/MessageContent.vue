<script setup lang="ts">
import { default as DOMPurify } from "dompurify";
import type { ChatMessage } from "llamaindex";
import { marked, Renderer, type Tokens } from "marked";

defineProps<{
	message: ChatMessage;
}>();

// Helper function to render markdown safely
function renderMarkdown(text: string | unknown): string {
	// Handle different content formats (string, or Anthropic's content blocks array)
	let textString: string;
	
	if (typeof text === 'string') {
		textString = text;
	} else if (Array.isArray(text)) {
		// Anthropic format: [{type: "text", text: "..."}]
		textString = text
			.filter((block: any) => block.type === 'text')
			.map((block: any) => block.text)
			.join('\n\n'); // Use double newline to preserve paragraph breaks
	} else {
		textString = String(text || '');
	}
	
	// Remove all content between <think> and </think> tags
	const regex = /<think>[\s\S]*?<\/think>/g;
	const sanitizedText = textString.replace(regex, "");

	// Custom renderer to wrap tables in divs and handle links
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

	// Ensure links are properly rendered
	const html = marked(sanitizedText, { 
		renderer, 
		async: false,
		breaks: true, // Convert \n to <br>
		gfm: true, // GitHub Flavored Markdown
	});
	
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
