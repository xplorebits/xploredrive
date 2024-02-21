<template>
  <div class="h-screen relative text-neutral-600 dark:text-[#929299]">
    <div class="absolute top-0 bottom-0 left-0 w-48 bg-neutral-100 dark:bg-[#0C0A13] px-3">
      <ListConnections />
    </div>
    <div class="absolute top-0 right-0 bottom-0 left-48 bg-neutral-50 dark:bg-[#16161E]" />
  </div>
</template>

<script setup>
import ListConnections from './components/ListConnections.vue'
</script>
