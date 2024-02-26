<template>
  <ul class="flex items-start flex-wrap gap-3">
    <li
      v-for="node in nodes"
      :key="`folder-${activeNode.id}-${node.id}`"
      :active="true"
      :class="[
        activeFolderId === node.id
          ? 'bg-primary-light dark:bg-primary-dark bg-opacity-40 dark:bg-opacity-40 hover:bg-opacity-20 hover:dark:bg-opacity-20'
          : 'hover:bg-input-border-light hover:dark:bg-input-border-dark',
        'space-y-1 p-2 rounded cursor-pointer select-none'
      ]"
      @click="() => emits('click:item', node.id)"
    >
      <div class="h-12 aspect-square block mx-auto">
        <NodeIcon :node="node" class="w-full h-full" />
      </div>
      <p
        :class="[
          activeFolderId === node.id ? 'text-body-light dark:text-body-dark' : '',
          'text-xs text-center w-full max-w-[1208px] truncate'
        ]"
      >
        {{ node.name }}
    </p>
    </li>
  </ul>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import NodeIcon from './NodeIcon.vue'

defineProps({
  activeNode: {
    type: Object,
    default: () => {
      return {}
    }
  },
  nodes: {
    type: Array,
    default: () => {
      return []
    }
  },
  activeFolderId: {
    type: String,
    default: () => {
      return false
    }
  }
})

const emits = defineEmits(['click:item'])
</script>
