<template>
  <UModal v-model="isOpen">
    <UCard>
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
      </div>

      <template #footer>
        <div class="flex items-center gap-3">
          <UButton label="Cancel" variant="ghost" @click="() => isOpen = false" />
          <div class="grow" />
          <UButton label="Submit" />
        </div>
      </template>
    </UCard>
  </UModal>
</template>

<script setup>
const isOpen = ref(false)
const refInputFile = ref(null)

const open = function () {
  isOpen.value = true
}

defineExpose({ open })
</script>
