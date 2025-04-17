<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const props = defineProps<{
  chatId?: string
}>()
const conversationId = computed(() => props.chatId)

// API base URL - adjust as needed for your environment
const API_BASE_URL = '/api/v1'

// Translation objects for each supported language
const translations = {
  en: {
    emptyState: 'Start a conversation by asking a question about the message traffic',
    inputPlaceholder: 'Type your question here...',
    sendButton: 'Send',
    languageToggle: 'Liever in het nederlands',
    loading: 'Loading...',
    error: 'An error occurred. Please try again.',
  },
  nl: {
    emptyState: 'Stel hier een vraag over het berichtenverkeer...',
    inputPlaceholder: 'Typ hier je vraag...',
    sendButton: 'Versturen',
    languageToggle: 'Switch to English',
    loading: 'Bezig met laden...',
    error: 'Er is een fout opgetreden. Probeer het opnieuw.',
  },
}

// Current language state
const currentLanguage = ref<'en' | 'nl'>('nl')

// Computed config that changes based on selected language
const config = computed(() => {
  return translations[currentLanguage.value]
})

// Router and route for URL handling
const router = useRouter()
const route = useRoute()

const messageInput = ref('')
const messages = ref<Array<{ text: string; isUser: boolean }>>([])
const isReceivingMessage = ref(false)
const error = ref<string | null>(null)

// Computed property to determine if send button should be disabled
const isSendDisabled = computed(() => {
  return isReceivingMessage.value || !messageInput.value.trim()
})

// Check for conversation ID in the URL when component mounts
onMounted(async () => {
  const id = route.params.id as string
  if (id) {
    await loadConversation(id)
  }
})

// Watch for changes to the conversation ID and update the URL
watch(conversationId, (newId) => {
  if (newId && route.params.id !== newId) {
    router.push({ name: 'chat', params: { id: newId } })
  }
})

// Load a conversation by ID
async function loadConversation(id: string) {
  try {
    isReceivingMessage.value = true
    error.value = null

    const response = await fetch(`${API_BASE_URL}/conversations/${id}`)

    if (!response.ok) {
      throw new Error(`Failed to load conversation: ${response.statusText}`)
    }

    const data = await response.json()
    conversationId.value = data.id

    // Convert API message format to our local format
    messages.value = []

    // Define the expected API message type
    interface ApiMessage {
      role: 'system' | 'user' | 'assistant'
      content: Array<{ type: string; text: string }>
    }

    // Use for...of instead of forEach as recommended by the linter
    for (const msg of data.messages as ApiMessage[]) {
      // Skip system messages as they shouldn't be displayed to the user
      if (msg.role === 'system') continue

      // Get the text content from the message
      const text = msg.content[0]?.text || ''

      messages.value.push({
        text,
        isUser: msg.role === 'user',
      })
    }
  } catch (e) {
    console.error('Error loading conversation:', e)
    error.value = config.value.error
  } finally {
    isReceivingMessage.value = false
  }
}

// Send a message to the API
async function sendMessage() {
  // Skip empty messages or if currently receiving a message
  if (isSendDisabled.value) return

  const messageText = messageInput.value.trim()

  // Add user message to chat immediately for better UX
  messages.value.push({
    text: messageText,
    isUser: true,
  })

  // Clear input after sending
  messageInput.value = ''

  // Set receiving state to true
  isReceivingMessage.value = true
  error.value = null

  try {
    // Define the request body interface
    interface ResponseRequestBody {
      input_text: string
      conversation_id?: string
    }

    // Prepare request body based on whether we have an existing conversation
    const requestBody: ResponseRequestBody = {
      input_text: messageText,
    }

    if (conversationId.value) {
      requestBody.conversation_id = conversationId.value
    }

    // Call the API
    const response = await fetch(`${API_BASE_URL}/responses`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })

    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`)
    }

    const data = await response.json()

    // Update conversation ID if this was a new conversation
    if (!conversationId.value && data.conversation_id) {
      conversationId.value = data.conversation_id
    }

    // Add AI response to the chat
    // Define the expected API response type
    interface ApiChatResponse {
      choices: Array<{
        message?: {
          content?: string
        }
      }>
      conversation_id: string
      message_count: number
    }

    // Extract response text from the appropriate field in the API response
    const responseData = data as ApiChatResponse
    const responseText = responseData.choices?.[0]?.message?.content || 'No response received'

    messages.value.push({
      text: responseText,
      isUser: false,
    })
  } catch (e) {
    console.error('Error sending message:', e)
    error.value = config.value.error
  } finally {
    // Reset receiving state
    isReceivingMessage.value = false
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
        {{ message.text }}
      </div>

      <div v-if="isReceivingMessage" class="message response-message loading-message">
        {{ config.loading }}
      </div>
    </div>

    <div class="input-container">
      <input
        v-model="messageInput"
        @keyup.enter="sendMessage"
        :placeholder="config.inputPlaceholder"
        class="message-input"
        :disabled="isReceivingMessage"
      />
      <button @click="sendMessage" class="send-button" :disabled="isSendDisabled">
        {{ config.sendButton }}
      </button>
    </div>
  </div>
</template>

<style scoped>
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
  padding-bottom: 80px; /* Extra padding at bottom to prevent content from being hidden behind fixed input */
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

.input-container {
  display: flex;
  padding: 12px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(5px);
  max-width: 800px;
  margin: 0 auto;
  left: 50%;
  transform: translateX(-50%);
}

.message-input {
  flex: 1;
  padding: 10px 14px;
  border: 1px solid #ddd;
  border-radius: 20px;
  margin-right: 8px;
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
