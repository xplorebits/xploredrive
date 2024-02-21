<template>
  <div class="space-y-3">
    <div class="flex items-center gap-3 h-8">
      <p class="text-sm">XploreDrive</p>
      <div class="grow" />
      <button class="p-1 bg-transparent hover:bg-[#272936] rounded-sm">
        <img
          class="filter invert-0 dark:invert w-auto h-5"
          src="../assets/vectors/keyboard-double-arrow-left.svg"
        />
      </button>
    </div>

    <div class="space-y-1">
      <p class="text-xs">Connections</p>
      <ul>
        <li v-for="item in connections" :key="`list-connections-nav-${item.id}`" class="-mx-3">
          <button
            class="text-sm px-3 py-1.5 bg-transparent hover:bg-[#272936] text-neutral-300 hover:text-white w-full text-left truncate"
          >
            {{ item.name }}
          </button>
        </li>
      </ul>
      <div class="-mx-3">
        <button class="w-full text-xs bg-transparent py-1.5 px-3 hover:text-white">
          Add New Connection
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const connections = ref([
  { id: 't1234', name: 'Google Cloud Storage' },
  { id: 't1235', name: 'Google Cloud Storage 2' },
  { id: 't1235', name: 'Databricks EU1' }
])
</script>
