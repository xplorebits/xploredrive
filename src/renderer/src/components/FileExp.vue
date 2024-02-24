<template>
  <div class="absolute top-0 right-0 left-0 h-12">
    <div class="h-full app-window-drag w-full bg-transparent border-b dark:border-[#272734]">
      <HeaderExp :connection="connection" />
    </div>
  </div>
  <div class="absolute top-12 right-0 bottom-0 left-0">
    <div
      class="absolute top-0 bottom-0 left-0 w-48 border-r dark:border-[#272734] px-2 overflow-y-auto"
    >
      <SidebarExp :connection="connection" :tree-data="treeData" />
    </div>

    <div class="absolute top-0 right-0 bottom-0 left-48 px-2">Files</div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import { useStorage } from '@vueuse/core'

import HeaderExp from './HeaderExp.vue'
import SidebarExp from './SidebarExp.vue'

const connections = useStorage('connections', [])
const activeConnection = useStorage('activeConnection', '')

const files = ref([])

const treeData = computed(() => {
  return files.value.map((x) => ({
    ...x,
    id: uuidv4(),
    name: x.path.split('/')[x.path.split('/').length - 1]
  }))
})

const connection = computed(() => {
  return connections.value.find((x) => x.id === activeConnection.value) || null
})

const init = async function () {
  try {
    const responseConnection = await window.api.dbfs.connect({
      url: connection.value?.url,
      token: connection.value?.token
    })

    if (responseConnection) {
      const responseRootList = await window.api.dbfs.getList('/')
      files.value = responseRootList.files
    }

  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  init()
})
</script>
