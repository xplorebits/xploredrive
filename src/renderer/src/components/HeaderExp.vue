<template>
  <div class="flex items-center gap-3 h-full px-3">
    <p class="text-sm text-white opacity-80">{{ connection?.name }}</p>
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
  }
})
</script>
