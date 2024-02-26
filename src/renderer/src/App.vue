<template>
  <div class="h-screen relative text-body-text-light dark:text-body-text-dark">
    <div class="absolute top-0 bottom-0 left-0 w-48 bg-white dark:bg-[#0C0A13]">
      <div class="app-window-drag">
        <div class="h-7 app-window-drag w-full bg-transparent" />
      </div>
      <div class="px-3">
        <ListConnections />
      </div>
    </div>
    <div class="absolute top-0 right-0 bottom-0 left-48 bg-neutral-50 dark:bg-[#16161E]">
      <FileExp />
    </div>
  </div>

  <ModalsContainer />
</template>

<script setup>
import { ModalsContainer } from 'vue-final-modal'
import ListConnections from './components/ListConnections.vue'
import FileExp from './components/FileExp.vue'
</script>
