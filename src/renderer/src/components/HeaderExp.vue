<template>
  <div class="flex items-center gap-3 h-full px-3">
    <p class="text-sm text-white opacity-80">{{ connection?.name }}</p>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6z"/></svg>
    <p class="text-sm text-white opacity-80">{{ activeNode?.name || '' }}</p>

    <div class="grow" />

    <button
      v-if="activeFolderId"
      class="app-window-no-drag border border-input-border-light dark:border-input-border-dark p-1.5 rounded bg-transparent dark:bg-transparent hover:bg-primary-light hover:dark:primary-dark hover:bg-opacity-60 hover:dark:bg-opacity-60 hover:text-white hover:dark:text-white"
    >
      <div class="w-5 h-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="auto" height="auto" viewBox="0 0 24 24"><path fill="currentColor" d="M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5q0-.425.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5q0 .425-.288.713T19 6v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zm-7 11q.425 0 .713-.288T11 16V9q0-.425-.288-.712T10 8q-.425 0-.712.288T9 9v7q0 .425.288.713T10 17m4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.712T14 8q-.425 0-.712.288T13 9v7q0 .425.288.713T14 17M7 6v13z"/></svg>
      </div>
    </button>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  activeFolderId: {
    type: String,
    default: () => {
      return ''
    }
  },
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
