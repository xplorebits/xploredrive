<template>
  <UModal v-model="isOpen">
    <UCard>
      <template #header>
        <p class="text-lg">
          Setup a new connection
        </p>
      </template>

      <div>
        <UVerticalNavigation :links="links">
          <template #avatar="{ link }">
            <ui-name-icon :identifier="link.nameIcon" class="w-6 h-auto" />
          </template>
        </UVerticalNavigation>
      </div>

      <template #footer>
        <div class="flex items-center gap-3">
          <div class="grow" />
          <UButton label="Cancel" variant="ghost" @click="() => isOpen = false" />
          <UButton label="Setup" />
        </div>
      </template>
    </UCard>
  </UModal>
</template>

<script setup>
const isOpen = ref(false)

const links = [
  { label: 'GCP: Google Cloud Storage', nameIcon: 'gcp' },
  // { label: 'Databricks', nameIcon: 'databricks' }
]

const open = function () {
  isOpen.value = true
}

defineExpose({ open })
</script>
