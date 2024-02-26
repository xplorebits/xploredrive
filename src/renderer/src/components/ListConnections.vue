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
            :data-active="activeConnection === item.id"
            class="data-[active=true]:bg-list-item-light data-[active=true]:dark:bg-list-item-dark data-[active=true]:bg-opacity-100 text-sm px-3 py-1.5 bg-transparent hover:bg-[#272936] bg-opacity-90 text-text-light dark:text-text-dark hover:text-black hover:dark:text-white w-full text-left truncate"
            @click="() => (activeConnection = item.id)"
          >
            {{ item.name }}
          </button>
        </li>
      </ul>
      <div class="-mx-3">
        <button
          class="w-full text-xs bg-transparent py-1.5 px-3 text-text-light dark:text-text-dark hover:text-black hover:dark:text-white"
          @click="() => modalNewConnection.open()"
        >
          Add New Connection
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStorage } from '@vueuse/core'
import { useNewConnectionModal } from '../modals/NewConnection/Controller.js'

const modalNewConnection = useNewConnectionModal()

const connections = useStorage('connections', [
  /* { id: 't1234', name: 'Google Cloud Storage' },
  { id: 't1235', name: 'Google Cloud Storage 2' },
  { id: 't1235', name: 'Databricks EU1' } */
])

const activeConnection = useStorage('activeConnection', '')
</script>
