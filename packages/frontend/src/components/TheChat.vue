<script setup lang="ts">
import { ref, computed } from 'vue'

// Config object for all user-facing strings
const config = {
  emptyState: 'Start a conversation by sending a message',
  inputPlaceholder: 'Type your message here...',
  sendButton: 'Send',
}

const messageInput = ref('')
const messages = ref<Array<{ text: string; isUser: boolean }>>([])
const isReceivingMessage = ref(false)

// Computed property to determine if send button should be disabled
const isSendDisabled = computed(() => {
  return isReceivingMessage.value || !messageInput.value.trim()
})

const sendMessage = () => {
  // Skip empty messages or if currently receiving a message
  if (isSendDisabled.value) return

  // Add user message to chat
  messages.value.push({
    text: messageInput.value,
    isUser: true,
  })

  // Set receiving state to true
  isReceivingMessage.value = true

  // Simulate response (in a real app, this would be an API call)
  setTimeout(() => {
    const response = 'This is a simulated response.'
    messages.value.push({
      text: response,
      isUser: false,
    })

    // Reset receiving state
    isReceivingMessage.value = false
  }, 1000)

  // Clear input after sending
  messageInput.value = ''
}
</script>

<template>
  <div class="chat-container">
    <div class="messages-container">
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
    </div>

    <div class="input-container">
      <input
        v-model="messageInput"
        @keyup.enter="sendMessage"
        :placeholder="config.inputPlaceholder"
        class="message-input"
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
  height: 100%;
  max-width: 800px;
  margin: 0 auto;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  overflow: hidden;
}

.messages-container {
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-height: 300px;
}

.empty-state {
  color: #888;
  text-align: center;
  margin-top: 48px;
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

.input-container {
  display: flex;
  padding: 12px;
  background-color: white;
  border-top: 1px solid #e1e1e1;
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
