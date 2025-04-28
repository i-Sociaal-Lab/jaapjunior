<script setup lang="ts">
import { useApi } from "@/composables/useApi";
import { default as DOMPurify } from "dompurify";
import * as marked from "marked";
import { computed, onMounted, onUnmounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const conversationId = computed(() => route.params.id as string | undefined);

// Translation objects for each supported language
const translations = {
	en: {
		emptyState:
			"Start a conversation by asking a question about the message traffic",
		inputPlaceholder: "Type your question here...",
		sendButton: "Send",
		languageToggle: "Liever in het nederlands",
		loading: "Loading...",
		error: "An error occurred. Please try again.",
	},
	nl: {
		emptyState: "Stel hier een vraag over het berichtenverkeer...",
		inputPlaceholder: "Typ hier je vraag...",
		sendButton: "Versturen",
		languageToggle: "Switch to English",
		loading: "Bezig met laden",
		error: "Er is een fout opgetreden. Probeer het opnieuw.",
	},
};

// Current language state
const currentLanguage = ref<"en" | "nl">("nl");

// Computed config that changes based on selected language
const config = computed(() => {
	return translations[currentLanguage.value];
});

// Router and route for URL handling
const router = useRouter();

const messageInput = ref("");
const messages = ref<Array<{ text: string; isUser: boolean }>>([]);
const selectedModel = ref<"4.1-nano" | "4.1" | undefined>("4.1-nano");
const isReceivingMessage = ref(false);
const error = ref<string | null>(null);

// Computed property to determine if send button should be disabled
const isSendDisabled = computed(() => {
	return isReceivingMessage.value || !messageInput.value.trim();
});

const dots = ref("");
let interval: number | null = null;

// Check for conversation ID in the URL when component mounts
onMounted(async () => {
	let count = 0;
	interval = window.setInterval(() => {
		count = (count + 1) % 4;
		dots.value = ".".repeat(count);
	}, 500);

	const id = route.params.id as string;
	if (id) {
		await loadConversation(id);
	}
});

onUnmounted(() => {
	if (interval) {
		window.clearInterval(interval);
	}
});

// Watch for changes to the conversation ID and update the URL
watch(conversationId, (newId) => {
	if (!newId) {
		messages.value = [];
		isReceivingMessage.value = false;
		error.value = null;
	}
});

const api = useApi();

async function createConversation() {
	try {
		error.value = null;

		const response = await api.conversations.$post();

		if (!response.ok) {
			throw new Error(`Failed to create conversation: ${response.statusText}`);
		}

		const data = await response.json();
		await router.push({ name: "chat-with-id", params: { id: data.id } });
	} catch (error) {
		console.error(error);
	}
}

// Load a conversation by ID
async function loadConversation(id: string) {
	try {
		isReceivingMessage.value = true;
		error.value = null;

		const response = await api.conversations[":id"].$get({ param: { id } });
		if (!response.ok) {
			throw new Error(`Failed to load conversation: ${response.statusText}`);
		}

		const data = await response.json();

		// Convert API message format to our local format
		messages.value = [];

		// Define the expected API message type
		interface ApiMessage {
			role: "system" | "user" | "assistant";
			content: Array<{ type: string; text: string }>;
		}

		// Use for...of instead of forEach as recommended by the linter
		for (const msg of data.messages as ApiMessage[]) {
			// Skip system messages as they shouldn't be displayed to the user
			if (msg.role === "system") continue;

			// Get the text content from the message
			const text = msg.content[0]?.text || "";

			messages.value.push({
				text,
				isUser: msg.role === "user",
			});
		}
	} catch (e) {
		console.error("Error loading conversation:", e);
		error.value = config.value.error;
	} finally {
		isReceivingMessage.value = false;
	}
}

// Helper function to render markdown safely
function renderMarkdown(text: string): string {
	// Convert markdown to HTML
	const html = marked.marked(text, { async: false });
	// Sanitize HTML to prevent XSS attacks
	return DOMPurify.sanitize(html);
}

// Send a message to the API
async function sendMessage() {
	// Skip empty messages or if currently receiving a message
	if (isSendDisabled.value) return;

	const messageText = messageInput.value.trim();

	// Add user message to chat immediately for better UX
	messages.value.push({
		text: messageText,
		isUser: true,
	});

	// Clear input after sending
	messageInput.value = "";

	// Set receiving state to true
	isReceivingMessage.value = true;
	error.value = null;

	try {
		// Prepare request body based on whether we have an existing conversation
		if (!conversationId.value) {
			await createConversation();
		}

		if (!conversationId.value) {
			throw new Error("No conversation ID available");
		}

		console.log("Sending request...", conversationId.value);

		const response = await api.conversations[":id"].$post({
			param: { id: conversationId.value },
			json: { input_text: messageText, model: selectedModel.value },
		});

		if (!response.ok) {
			throw new Error(`API request failed: ${response.statusText}`);
		}

		const data = await response.json();

		messages.value.push({
			text: data.output_text,
			isUser: false,
		});
	} catch (e) {
		console.error("Error sending message:", e);
		error.value = config.value.error;
	} finally {
		// Reset receiving state
		isReceivingMessage.value = false;
	}
}
</script>

<template>
	<div class="chat-container">
		<div class="messages-container">
			<div v-if="error" class="error-message">
				{{ error }}
			</div>

			<div v-if="messages.length === 0" class="empty-state">
				{{ config.emptyState }}
			</div>

			<div
				v-for="(message, index) in messages"
				:key="index"
				:class="['message', message.isUser ? 'user-message' : 'response-message']"
			>
				<template v-if="message.isUser">{{ message.text }}</template>
				<div v-else v-html="renderMarkdown(message.text)" class="markdown-content"></div>
			</div>

			<div v-if="isReceivingMessage" class="message response-message loading-message">
				{{ config.loading }}<span>{{ dots }}</span>
			</div>
		</div>

		<TheChatInput
			v-model="messageInput"
			v-model:selected-model="selectedModel"
			@submit="sendMessage"
			:disabled="isSendDisabled"
			:loading="isReceivingMessage"
			:placeholder="config.inputPlaceholder"
			:sendButton="config.sendButton"
			class="bottom-0 fixed"
		/>
	</div>
</template>

<style scoped>
/* Styles for rendered markdown content */
.markdown-content {
	line-height: 1.5;
}

.markdown-content :deep(p) {
	margin: 0.5em 0;
}

.markdown-content :deep(ul),
.markdown-content :deep(ol) {
	padding-left: 1.5em;
	margin: 0.5em 0;
}

.markdown-content :deep(h1),
.markdown-content :deep(h2),
.markdown-content :deep(h3),
.markdown-content :deep(h4),
.markdown-content :deep(h5),
.markdown-content :deep(h6) {
	margin: 0.5em 0;
	font-weight: bold;
}

.markdown-content :deep(code) {
	background-color: rgba(0, 0, 0, 0.05);
	padding: 0.2em 0.4em;
	border-radius: 3px;
	font-family: monospace;
}

.markdown-content :deep(pre) {
	background-color: rgba(0, 0, 0, 0.05);
	padding: 0.5em;
	border-radius: 5px;
	overflow-x: auto;
	margin: 0.5em 0;
}

.markdown-content :deep(blockquote) {
	border-left: 4px solid #ddd;
	padding-left: 1em;
	margin: 0.5em 0;
	color: #555;
}

.markdown-content :deep(a) {
	color: #007bff;
	text-decoration: underline;
}

.chat-container {
	display: flex;
	flex-direction: column;
	max-width: 800px;
	margin: 0 auto;
	position: relative;
	min-height: calc(100vh - 120px); /* Minimum height but allows expanding */
}

.messages-container {
	flex: 1;
	padding: 16px;
	padding-bottom: 160px; /* Extra padding at bottom to prevent content from being hidden behind fixed input */
	display: flex;
	flex-direction: column;
	gap: 12px;
	width: 100%;
}

.empty-state {
	color: #888;
	text-align: center;
	margin-top: 48px;
}

.error-message {
	color: #e74c3c;
	background-color: #fde2e2;
	padding: 10px;
	border-radius: 8px;
	margin-bottom: 12px;
	text-align: center;
}

.message {
	padding: 10px 14px;
	border-radius: 18px;
	max-width: 70%;
	word-break: break-word;
}

.user-message {
	align-self: flex-end;
	background-color: #007bff;
	color: white;
	border-bottom-right-radius: 4px;
}

.response-message {
	align-self: flex-start;
	background-color: #e1e1e1;
	color: #333;
	border-bottom-left-radius: 4px;
}

.loading-message {
	background-color: #f8f9fa;
	color: #777;
	font-style: italic;
}
</style>
