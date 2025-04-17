<script setup lang="ts">
import { ref, computed } from 'vue'

// Translation objects for each supported language
const translations = {
  en: {
    emptyState: 'Start a conversation by asking a question about the message traffic',
    inputPlaceholder: 'Type your question here...',
    sendButton: 'Send',
    languageToggle: 'Liever in het nederlands',
  },
  nl: {
    emptyState: 'Stel hier een vraag over het berichtenverkeer...',
    inputPlaceholder: 'Typ hier je vraag...',
    sendButton: 'Versturen',
    languageToggle: 'Switch to English',
  },
}

// Current language state
const currentLanguage = ref<'en' | 'nl'>('nl')

// Computed config that changes based on selected language
const config = computed(() => {
  return translations[currentLanguage.value]
})

// Toggle between languages
const toggleLanguage = () => {
  currentLanguage.value = currentLanguage.value === 'en' ? 'nl' : 'en'
}

const messageInput = ref('')

// Add some example messages to test scrolling
const messages = ref<Array<{ text: string; isUser: boolean }>>([  
  { text: 'Hallo, ik heb een vraag over het berichtenverkeer.', isUser: true },
  { text: 'Natuurlijk, wat wilt u weten over het berichtenverkeer?', isUser: false },
  { text: 'Hoeveel berichten worden er dagelijks verwerkt?', isUser: true },
  { text: 'Gemiddeld worden er ongeveer 25.000 berichten per dag verwerkt via ons systeem.', isUser: false },
  { text: 'Dat is interessant. Wat voor soort berichten zijn het meestal?', isUser: true },
  { text: 'Het merendeel bestaat uit facturen (60%), gevolgd door orders (25%) en de rest zijn verschillende soorten informatieve berichten.', isUser: false },
  { text: 'Worden deze berichten allemaal automatisch verwerkt?', isUser: true },
  { text: 'Ongeveer 85% wordt volledig geautomatiseerd verwerkt. De overige 15% vereist een vorm van handmatige interventie vanwege uitzonderingssituaties.', isUser: false },
  { text: 'Hoe snel worden de berichten normaal gesproken verwerkt?', isUser: true },
  { text: 'De meeste berichten worden binnen 30 seconden verwerkt. In zeldzame gevallen kan het tot 5 minuten duren als er aanvullende validatie nodig is.', isUser: false },
  { text: 'Is er een piek in het berichtenverkeer op bepaalde momenten?', isUser: true },
  { text: 'Ja, we zien een duidelijke piek rond 10 uur \'s ochtends en rond 14 uur \'s middags. Aan het einde van de maand is het verkeer ongeveer 40% hoger dan gemiddeld.', isUser: false },
])

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
    <div class="language-toggle">
      <button @click="toggleLanguage" class="toggle-button">
        {{ config.languageToggle }}
      </button>
    </div>

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
.language-toggle {
  display: flex;
  justify-content: flex-end;
  padding: 8px 12px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #e1e1e1;
}

.toggle-button {
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 4px 10px;
  font-size: 12px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.toggle-button:hover {
  background-color: #5a6268;
}

.chat-container {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 120px); /* Adjust as needed to account for header height and padding */
  max-width: 800px;
  margin: 0 auto;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
}

.messages-container {
  flex: 1;
  padding: 16px;
  padding-bottom: 80px; /* Extra padding at bottom to prevent content from being hidden behind fixed input */
  overflow-y: auto;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 100%; /* Take full height */
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
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
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
