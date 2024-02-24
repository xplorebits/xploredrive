<template>
  <div class="absolute top-0 right-0 left-0 h-12">
    <div class="h-full app-window-drag w-full bg-transparent border-b dark:border-[#272734]">
      <HeaderExp :connection="connection" />
    </div>
  </div>
  <div class="absolute top-12 right-0 bottom-0 left-0">
    <div class="absolute top-0 bottom-0 left-0 w-48 border-r dark:border-[#272734] px-2">
      <SidebarExp :connection="connection" />
    </div>

    <div class="absolute top-0 right-0 bottom-0 left-48 px-2">Files</div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useStorage } from '@vueuse/core'

import HeaderExp from './HeaderExp.vue'
import SidebarExp from './SidebarExp.vue'

const connections = useStorage('connections', [])
const activeConnection = useStorage('activeConnection', '')

const connection = computed(() => {
  return connections.value.find((x) => x.id === activeConnection.value) || null
})

const init = async function () {
  try {
    const responseConnection = await window.api.connect({
      url: connection.value?.url,
      token: connection.value?.token
    })

    if (responseConnection) {
      const responseRootList = await window.api.getList('/')
      console.log(responseRootList)
    }

  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  init()
})
</script>
