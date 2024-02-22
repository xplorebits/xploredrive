<template>
  <VueFinalModal
    class="flex justify-center items-center"
    content-class="flex flex-col w-full max-w-xl mx-4 p-4 bg-white dark:bg-[#252631] border dark:border-[#323342] text-neutral-600 dark:text-body-text-dark rounded-lg space-y-2"
  >
    <div class="space-y-3">
      <p class="text-black dark:text-white text-lg">New Databricks Connection</p>

      <div class="space-y-2">
        <div class="space-y-1">
          <label for="input-connection-name-new-connection-databricks" class="text-sm">Name</label>
          <input
            id="input-connection-name-new-connection-databricks"
            v-model="name"
            placeholder="Type here"
            class="block px-3 py-2 text-sm w-full rounded bg-input-bg-light dark:bg-input-bg-dark border border-input-border-light dark:border-input-dark"
          />
        </div>

        <div class="space-y-1">
          <label for="input-connection-url-new-connection-databricks" class="text-sm">
            Connection URL
          </label>
          <input
            id="input-connection-url-new-connection-databricks"
            v-model="url"
            placeholder="https://<domain>.provider.com"
            class="block px-3 py-2 text-sm w-full rounded bg-input-bg-light dark:bg-input-bg-dark border border-input-border-light dark:border-input-dark"
          />
        </div>

        <div class="space-y-1">
          <label for="input-connection-token-new-connection-databricks" class="text-sm">
            Personal Access Token
          </label>
          <input
            id="input-connection-url-token-connection-databricks"
            v-model="token"
            placeholder="Paste your token here"
            type="password"
            class="block px-3 py-2 text-sm w-full rounded bg-input-bg-light dark:bg-input-bg-dark border border-input-border-light dark:border-input-dark"
          />
        </div>
      </div>

      <div class="flex items-center gap-3 h-auto">
        <div class="grow" />
        <button
          class="bg-[#4B97F7] bg-opacity-90 hover:bg-opacity-100 disabled:bg-[#282A3B] text-white disabled:text-body-text-dark px-6 py-2 text-sm rounded"
          @click="onClickSave"
        >
          Save
        </button>
      </div>
    </div>
  </VueFinalModal>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
import { useStorage } from '@vueuse/core'
import { v4 as uuidv4 } from 'uuid'
import { VueFinalModal } from 'vue-final-modal'

const name = ref('')
const url = ref('')
const token = ref('')

const emits = defineEmits('confirm')

const connections = useStorage('connections', [])

const onClickSave = function () {
  connections.value.push({
    id: uuidv4(),
    name: name.value,
    token: token.value
  })

  emits('confirm')
}
</script>
