<template>
  <div class="absolute top-0 right-0 left-0 h-12">
    <div class="h-full app-window-drag w-full bg-transparent border-b dark:border-[#272734]">
      <HeaderExp
        :connection="connection"
        :node-id="activeNodeId"
        :active-node="activeNode"
        :active-folder-id="activeFolderId"
      />
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
      <Loading v-if="statesLoading.exp" />
      <div v-else-if="childrenOfActiveNode.length">
        <Folder
          :active-node="activeNode"
          :active-folder-id="activeFolderId"
          :nodes="childrenOfActiveNode"
          @click:item="(value) => (activeFolderId = value)"
        />
      </div>
      <div v-else>
        <p class="text-xs opacity-50">Empty Directory</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import { useStorage } from '@vueuse/core'

import HeaderExp from './HeaderExp.vue'
import SidebarExp from './SidebarExp.vue'
import Loading from './Loading.vue'
import Folder from './Folder.vue'

const connections = useStorage('connections', [])
const activeConnection = useStorage('activeConnection', '')
const nodes = ref([])
const nav = ref([])
const statesLoading = ref({
  nav: false,
  exp: false
})
const activeFolderId = ref('')

const connection = computed(() => {
  return connections.value.find((x) => x.id === activeConnection.value) || null
})

const rootNodes = computed(() => {
  return nodes.value.filter((x) => x.root && x.is_dir)
})

const activeNodeId = computed(() => {
  return nav.value[nav.value.length - 1]
})

const activeNode = computed(() => {
  return nodes.value.find((x) => x.id === activeNodeId.value) || {}
})

const childrenOfActiveNode = computed(() => {
  return nodes.value.filter((x) =>
    activeNodeId.value ? x.parentNodeId === activeNodeId.value : false
  )
})

watch(activeNode, (value) => {
  if (value?.id && value?.is_dir === true) {
    fetchChildNode(value)
  }
})

// TODO: Move this into global utils
const getNameFromPath = function (path) {
  const pathValues = path.split('/')
  return pathValues[pathValues.length - 1] || ''
}

const fetchChildNode = function (node) {
  statesLoading.value.exp = true
  window.api.dbfs
    .getList(node.path)
    .then((response) => {
      if (Array.isArray(response?.files)) {
        response.files.forEach((item) => {
          if (nodes.value.findIndex((x) => x.path === item.path) < 0) {
            nodes.value.push({
              ...item,
              id: uuidv4(),
              name: getNameFromPath(item.path),
              parentNodeId: node.id
            })
          }
        })
      }
    })
    .catch((error) => {
      console.error(error)
    })
    .finally(() => {
      statesLoading.value.exp = false
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
        return { ...x, root: true, id: uuidv4(), name: getNameFromPath(x.path) }
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
