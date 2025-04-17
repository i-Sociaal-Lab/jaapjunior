<script setup lang="ts">
import TheChat from '../components/TheChat.vue'
</script>

<template>
  <main>
    <div class="header">
      <img src="/jaap.png" alt="Jaap" class="logo jaap-logo" />
      <img src="/ketenbureau.png" alt="Ketenbureau" class="logo ketenbureau-logo" />
    </div>
    <TheChat />
  </main>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
}

.logo {
  height: 60px;
  object-fit: contain;
}

.jaap-logo {
  margin-right: auto;
}

.ketenbureau-logo {
  margin-left: 20px;
}

main {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>
