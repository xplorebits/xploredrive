<template>
  <div class="relative py-2">
    <div v-if="isLoading" class="flex items-center justify-center h-[10vh]">
      <Loading />
    </div>
    <ul v-else class="relative z-10 space-y-1">
      <li
        v-for="item in rootData"
        :key="`sidebar-exp-treeview-${item.id}`"
        :class="[item.id === nodeId ? 'sticky top-0 bottom-0' : '']"
      >
        <div
          :class="[
            item.id === nodeId
              ? 'bg-primary text-white z-50'
              : 'bg-primary bg-opacity-5 hover:bg-opacity-20 z-10',
            'relative h-6 w-full select-none p-2'
          ]"
          name="test"
          @click="() => emits('click:node', item.id)"
        >
          <div class="absolute top-0 bottom-0 left-0 w-6">
            <div class="flex items-center justify-center h-full">
              <svg
                :class="[
                  item.id === nodeId ? 'text-white' : 'text-primary',
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
              <p
                :class="[
                  item.id === nodeId ? 'text-white' : 'text-body',
                  'text-xs truncate'
                ]"
              >
                {{ item.name }}
              </p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineEmits, ref } from 'vue'
import Loading from './Loading.vue'

defineProps({
  rootData: {
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
  },
  isLoading: {
    type: Boolean,
    default: () => {
      return false
    }
  }
})

const emits = defineEmits(['click:node'])
</script>
