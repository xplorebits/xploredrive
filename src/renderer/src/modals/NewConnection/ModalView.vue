<template>
  <VueFinalModal
    class="flex justify-center items-center"
    content-class="flex flex-col w-full max-w-xl mx-4 p-4 bg-white dark:bg-[#252631] border dark:border-[#323342] text-neutral-600 dark:text-text-dark rounded-lg space-y-2"
  >
    <div class="space-y-3">
      <p class="text-black dark:text-white text-lg">New Connection</p>
      <p class="text-sm">Choose a provider to get started</p>
      <div class="grid grid-cols-12 gap-3">
        <button
          v-for="item in providers"
          :key="`new-connection-select-provider-${item.id}`"
          :data-active="selectionProvider === item.id"
          class="data-[active=true]:bg-primary-dark data-[active=true]:bg-opacity-20 hover:data-[active=true]:bg-opacity-30 data-[active-true]:text-white relative col-span-2 aspect-square border border-line-light dark:border-line-dark hover:bg-line-light rounded"
          @click="() => onSelectProvider(item.id)"
        >
          <div class="absolute top-0 right-0 bottom-6 left-0">
            <div class="flex items-center justify-center h-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#E84932" d="M.95 14.184L12 20.403l9.919-5.55v2.21L12 22.662l-10.484-5.96l-.565.308v.77L12 24l11.05-6.218v-4.317l-.515-.309L12 19.118l-9.867-5.653v-2.21L12 16.805l11.05-6.218V6.32l-.515-.308L12 11.974L2.647 6.681L12 1.388l7.76 4.368l.668-.411v-.566L12 0L.95 6.27v.72L12 13.207l9.919-5.55v2.26L12 15.52L1.516 9.56l-.565.308Z"/></svg>
            </div>
          </div>
          <div class="absolute right-0 bottom-0 left-0 h-6">
            <p class="text-center text-xs text-text-light dark:text-text-dark">Databricks</p>
          </div>
        </button>
      </div>
      <p class="text-sm">More providers are coming soon ...</p>
      <div class="flex items-center gap-3 h-auto">
        <div class="grow" />
        <button
          :disabled="!selectionProvider"
          class="bg-[#4B97F7] bg-opacity-90 hover:bg-opacity-100 disabled:bg-[#282A3B] text-white disabled:text-text-dark px-6 py-2 text-sm rounded"
          @click="onClickNext"
        >
          Next
        </button>
      </div>
    </div>
  </VueFinalModal>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
import { VueFinalModal } from 'vue-final-modal'
import { useNewDatabricksConnection } from '../NewConnectionDatabricks/Controller.js'

const emits = defineEmits(['confirm'])

const selectionProvider = ref('')
const providers = ref([{ id: 'provider-databricks', text: 'Databricks' }])

const onSelectProvider = function (id) {
  if (selectionProvider.value === id) {
    selectionProvider.value = ''
  } else {
    selectionProvider.value = id
  }
}

const onClickNext = function () {
  switch (selectionProvider.value) {
    case 'provider-databricks':
      useNewDatabricksConnection().open()
      emits('confirm')
      break
    default:
      break
  }
}
</script>
