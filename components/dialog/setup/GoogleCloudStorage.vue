<template>
  <UModal v-model="isOpen" :preventClose="state.prep">
    <UCard v-if="state.collect">
      <template #header>
        <div class="flex items-center gap-3 h-full">
          <p class="text-lg">
            Setup Google Cloud Storage
          </p>
          <div class="grow" />
          <ui-name-icon identifier="gcp" class="w-6 h-auto mt-2" />
        </div>
      </template>

      <div class="space-y-3">
        <UAlert
          icon="i-heroicons-information-circle"
          description="Make sure you have enabled Google Cloud Storage API on your project."
          title="Before you begin"
          variant="outline"
        />

        <p class="text-sm text-neutral-200">
          Please upload your Google Service Account JSON file, stored safely on your computer, to establish the connection.
          Rest assured, this file will not be shared on the internet.
        </p>

        <UButton
          icon="i-heroicons-computer-desktop"
          variant="outline"
          size="lg"
          @click="onClickSelectFile"
        >
          Select file from your computer
        </UButton>
      </div>

      <template #footer>
        <div class="flex items-center gap-3">
          <UButton label="Cancel" variant="ghost" @click="() => isOpen = false" />
          <div class="grow" />
          <UButton label="Submit" />
        </div>
      </template>
    </UCard>
    <UCard v-else-if="state.prep">
      <template #header>
        <div class="flex items-center gap-3 h-full">
          <p class="text-lg">
            Connected!
          </p>
          <div class="grow" />
          <ui-name-icon identifier="gcp" class="w-6 h-auto mt-2" />
        </div>
      </template>

      <UButton
        variant="ghost"
        icon="i-heroicons-check-circle"
        block
        color="white"
        :ui="{ block: 'justify-start' }"
      >
        Testing Service Account
      </UButton>

      <UButton
        variant="ghost"
        icon="i-heroicons-check-circle"
        block
        color="white"
        :ui="{ block: 'justify-start' }"
      >
        Create a sample file: asfkaslfjaslkdf/sample.txt
      </UButton>

      <UButton
        variant="ghost"
        icon="i-heroicons-check-circle"
        block
        color="white"
        :ui="{ block: 'justify-start' }"
      >
        read the sample file: asfkaslfjaslkdf/sample.txt
      </UButton>

      <UButton
        variant="ghost"
        icon="i-heroicons-check-circle"
        block
        color="white"
        :ui="{ block: 'justify-start' }"
      >
        Your connection is ready!
      </UButton>

      <template #footer>
        <div class="flex items-center gap-3">
          <div class="grow" />
          <UButton
            label="Finish"
            @click="close"
          />
        </div>
      </template>
    </UCard>
  </UModal>
</template>

<script setup>
import { open as selectFile } from '@tauri-apps/api/dialog';
import { readTextFile } from '@tauri-apps/api/fs';

const isOpen = ref(false)
const state = ref({
  collect: true,
  prep: false
})

const open = function () {
  isOpen.value = true
}

const close = function () {
  isOpen.value = false
}

const onClickSelectFile = async function () {
  try {
    const selected = await selectFile({
      multiple: false,
      filters: [{
        name: 'Service Account',
        extensions: ['json']
      }]
    });

    if (!selected) {
      return
    }

    console.log(selected)
    const serviceAccount = JSON.parse(await readTextFile(selected) || '')

    console.log(serviceAccount)
    state.value.collect = false
    state.value.prep = true
  } catch (error) {
    console.error(error)
  }
}

defineExpose({ open })
</script>
