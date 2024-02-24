<template>
  <div class="py-2">
    <ul class="space-y-1">
      <li
        v-for="item in treeData"
        :key="`sidebar-exp-treeview-${item.id}`"
        :class="[item.id === nodeId ? 'sticky top-0 bottom-0' : '']"
      >
        <div
          :class="[
            item.id === nodeId
              ? 'bg-primary-light dark:bg-primary-dark bg-opacity-60 dark:bg-opacity-60 hover:bg-opacity-80 text-black dark:text-white'
              : 'bg-primary-light dark:bg-primary-dark bg-opacity-5 dark:bg-opacity-5 hover:bg-opacity-20',
            'relative h-6 w-full select-none p-2'
          ]"
          name="test"
          @click="() => emits('click:node', item.id)"
        >
          <div class="absolute top-0 bottom-0 left-0 w-6">
            <div class="flex items-center justify-center h-full">
              <svg
                :class="[
                  item.id === nodeId
                    ? 'text-black dark:text-white'
                    : 'text-primary-light dark:text-primary-dark',
                  'w-4 h-4'
                ]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path fill="currentColor" d="M2 20V4h8l2 2h10v14z" />
              </svg>
            </div>
          </div>
          <div class="absolute top-0 right-0 bottom-0 left-4 px-2">
            <div class="flex items-center h-full">
              <p class="text-xs truncate">{{ item.name }}</p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue'

defineProps({
  treeData: {
    type: Array,
    default: () => {
      return []
    }
  },
  nodeId: {
    type: String,
    default: () => {
      return ''
    }
  }
})

const emits = defineEmits(['click:node'])
</script>
