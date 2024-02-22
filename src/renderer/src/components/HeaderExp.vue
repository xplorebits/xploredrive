<template>
  <div class="flex items-center gap-3 h-full px-3">
    <p class="text-sm text-white opacity-80">{{ connection?.name }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStorage } from '@vueuse/core'

const connections = useStorage('connections', [])
const activeConnection = useStorage('activeConnection', '')

const connection = computed(() => {
  return connections.value.find((x) => x.id === activeConnection.value) || null
})
</script>
