<script setup lang="ts">
import type { ChatMessage } from "llamaindex";
import { computed, onMounted, onUnmounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useApi } from "@/composables/useApi";

const route = useRoute();
const conversationId = computed(() => route.params.id as string | undefined);

// Translation objects for each supported language
const translations = {
	en: {
		emptyState:
			"Start a conversation by asking a question about the message traffic",
		inputPlaceholder: "Type your question here...",
		sendButton: "Send",
		sendButtonHasToPick: "First pick your preferred response",
		languageToggle: "Liever in het nederlands",
		loading: "Loading...",
		error: "An error occurred. Please try again.",
	},
	nl: {
		emptyState: "Stel hier een vraag over het berichtenverkeer...",
		inputPlaceholder: "Typ hier je vraag...",
		sendButton: "Versturen",
		sendButtonHasToPick: "Kies eerst welk bericht je voorkeur heeft",
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

type AllowedModels = Parameters<
	(typeof api)["conversations"][":id"]["$post"]
>[0]["json"]["model"];

type Modes = "rate" | "pick";

// Router and route for URL handling
const router = useRouter();

const messageInput = ref("");
const messages = ref<(ChatMessage | ChatMessage[])[]>([]);
const selectedMode = ref<Modes>("rate");
const selectedModel = ref<Exclude<AllowedModels, "rate"> | undefined>();
const isReceivingMessage = ref(false);
const error = ref<string | null>(null);

const hasToPickMessage = computed(() => {
	const lastMessage = messages.value[messages.value.length - 1];
	return Array.isArray(lastMessage);
});

// Computed property to determine if send button should be disabled
const isSendDisabled = computed(() => {
	return (
		isReceivingMessage.value ||
		!messageInput.value.trim() ||
		hasToPickMessage.value
	);
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
		if (response.status === 404) {
			isReceivingMessage.value = false;
			await router.push({ name: "home" });
			return;
		}

		if (!response.ok) {
			throw new Error(`Failed to load conversation: ${response.statusText}`);
		}

		const data = await response.json();

		// @ts-expect-error - should line up --- but doesn't
		messages.value = data.messages;
	} catch (e) {
		error.value = config.value.error;
	} finally {
		isReceivingMessage.value = false;
	}
}

// Send a message to the API
async function sendMessage() {
	// Skip empty messages or if currently receiving a message
	if (isSendDisabled.value) return;

	const messageText = messageInput.value.trim();

	// Add user message to chat immediately for improved UX
	messages.value.push({
		content: messageText,
		role: "user",
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

		const model = selectedMode.value === "rate" ? "rate" : selectedModel.value;
		if (!model) {
			throw new Error("No model selected");
		}

		const response = await api.conversations[":id"].$post({
			param: { id: conversationId.value },
			json: {
				inputText: messageText,
				model,
			},
		});

		if (!response.ok) {
			throw new Error(`API request failed: ${response.statusText}`);
		}

		const responses = await response.json();

		if (responses.length === 1) {
			// @ts-expect-error - should line up --- but doesn't
			messages.value.push(responses[0]);
		} else {
			// @ts-expect-error - should line up --- but doesn't
			messages.value.push(responses);
		}
	} catch (e) {
		console.error("Error sending message:", e);
		error.value = config.value.error;
	} finally {
		// Reset receiving state
		isReceivingMessage.value = false;
	}
}

async function pickMessage(message: ChatMessage, messagePair: ChatMessage[]) {
	const indexToChange = messages.value.findIndex((m) => m === messagePair);
	messages.value[indexToChange] = message;

	if (!conversationId.value) {
		throw new Error("No conversation ID available");
	}

	const otherMessage = messagePair.find((m) => m !== message);

	await api.conversations[":id"].pick.$post({
		param: { id: conversationId.value },
		// @ts-expect-error - to fix we have to add this to the conversations pick endpoint
		json: { prefers: message, over: otherMessage },
	});
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

			<template
				v-for="(messageOrMessagePair, index) in messages"
				:key="index"
			>
                <template v-if="Array.isArray(messageOrMessagePair)">
                    <span class="text-center">Welk bericht heeft je voorkeur?</span>
                    <div class="flex gap-2">
                    <div class="border rounded p-4 flex-1 self-start hover:bg-muted cursor-pointer"
                            v-for="message in messageOrMessagePair"
                            :key="message.content as string"
                            @click="pickMessage(message, messageOrMessagePair)"
                    >
                        <MessageContent
                            :message="message"
                        />
                    </div>
                    </div>
                </template>
                <template v-else>
                    <div
                        :class="['message', messageOrMessagePair.role === 'user' ? 'user-message' : 'response-message']"
                    >
                        <template v-if="messageOrMessagePair.role === 'user'">
                            {{ messageOrMessagePair.content }}
                        </template>
                        <MessageContent v-else :message="messageOrMessagePair" />
                    </div>
                </template>
			</template>

			<div v-if="isReceivingMessage" class="message response-message loading-message">
				{{ config.loading }}<span>{{ dots }}</span>
			</div>
		</div>

		<TheChatInput
			v-model="messageInput"
			v-model:mode="selectedMode"
			v-model:selected-model="selectedModel"
			@submit="sendMessage"
            autofocus
			:disabled="isSendDisabled"
			:loading="isReceivingMessage"
			:placeholder="config.inputPlaceholder"
			:sendButton="hasToPickMessage ? config.sendButtonHasToPick : config.sendButton "
			class="bottom-0 fixed self-center"
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
    background-color: var(--destructive);
	color: var(--destructive-foreground);
	padding: 10px;
	border-radius: 8px;
	margin-bottom: 12px;
	text-align: center;
}

.message {
	padding: 10px 14px;
	border-radius: 18px;
	word-break: break-word;
}

.user-message {
	align-self: flex-end;
	background-color: var(--primary);
	color: var(--primary-foreground);
	max-width: 70%;
	border-bottom-right-radius: 4px;
}

.response-message {
	align-self: flex-start;
	background-color: var(--secondary);
	color: var(--secondary-foreground);
	border-bottom-left-radius: 4px;
}

.loading-message {
	background-color: var(--secondary);
	color: var(--secondary-foreground);
	font-style: italic;
}
</style>
