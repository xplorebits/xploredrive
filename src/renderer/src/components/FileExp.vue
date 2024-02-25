<template>
  <div class="absolute top-0 right-0 left-0 h-12">
    <div class="h-full app-window-drag w-full bg-transparent border-b dark:border-[#272734]">
      <HeaderExp :connection="connection" :node-id="activeNodeId" :active-node="activeNode" />
    </div>
  </div>
  <div class="absolute top-12 right-0 bottom-0 left-0">
    <div
      class="absolute top-0 bottom-0 left-0 w-48 border-r dark:border-[#272734] px-2 overflow-y-auto"
    >
      <SidebarExp
        :is-loading="statesLoading.nav"
        :connection="connection"
        :root-data="rootNodes"
        :node-id="activeNodeId"
        @click:node="(value) => (nav = [value])"
      />
    </div>

    <div class="absolute top-0 right-0 bottom-0 left-48 p-3">
      {{ activeNode }}
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import { useStorage } from '@vueuse/core'

import HeaderExp from './HeaderExp.vue'
import SidebarExp from './SidebarExp.vue'

const connections = useStorage('connections', [])
const activeConnection = useStorage('activeConnection', '')
const nodes = ref([])
const nav = ref([])
const statesLoading = ref({
  nav: false
})

const connection = computed(() => {
  return connections.value.find((x) => x.id === activeConnection.value) || null
})

const rootNodes = computed(() => {
  return nodes.value.filter((x) => x.root)
})

const activeNodeId = computed(() => {
  return nav.value[nav.value.length - 1]
})

const activeNode = computed(() => {
  return nodes.value.find(x => x.id === activeNodeId.value) || {}
})

watch(activeNode, (value) => {
  if (value?.id && value?.is_dir === true) {
    fetchChildNode(value)
  }
})

const fetchChildNode = function (node) {
  window.api.dbfs
    .getList(node.path)
    .then((response) => {
      console.log(response)
      // nodes.value[node.id] = response?.files || []
    })
    .catch((error) => {
      console.error(error)
    })
}

const init = async function () {
  try {
    statesLoading.value.nav = true
    const responseConnection = await window.api.dbfs.connect({
      url: connection.value?.url,
      token: connection.value?.token
    })

    if (responseConnection) {
      const responseRootList = await window.api.dbfs.getList('/')
      nodes.value = responseRootList.files.map((x) => {
        const pathValues = x.path.split('/')
        return { ...x, root: true, id: uuidv4(), name: pathValues[pathValues.length - 1] }
      })
    }

    statesLoading.value.nav = false
  } catch (error) {
    console.error(error)
    statesLoading.value.nav = false
  }
}

onMounted(() => {
  init()
})
</script>
