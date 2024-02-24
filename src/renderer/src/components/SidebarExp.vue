<template>
  <div>
    <ul class="space-y-1">
      <li v-for="item in treeData" :key="`sidebar-exp-treeview-${item.id}`">
        <div class="relative h-4 w-full">
          <div class="absolute top-0 bottom-0 left-0 w-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="text-primary-light dark:text-primary-dark"
              viewBox="0 0 24 24"
            >
              <path fill="currentColor" d="M2 20V4h8l2 2h10v14z" />
            </svg>
          </div>
          <div class="absolute top-0 right-0 bottom-0 left-4 px-2">
            <p class="text-xs truncate">{{ item.name }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  treeData: {
    type: Array,
    default: () => {
      return []
    }
  }
})
</script>
