<template>
  <div class="flex items-center gap-3 h-full px-1">
    <p class="text-sm text-white opacity-80">{{ connection?.name }}</p>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6z"/></svg>
    <p class="text-sm text-white opacity-80">{{ activeNode?.name || '' }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  connection: {
    type: Object,
    default: () => {
      return {}
    }
  },
  activeNode: {
    type: Object,
    default: () => {
      return {}
    }
  }
})
</script>
