<template>
  <UModal v-model="isOpen">
    <UCard>
      <template #header>
        <p class="text-lg">
          Setup a new connection
        </p>
      </template>

      <div>
        <ul>
          <li
            v-for="(item, index) in providers"
            :key="`new-connection-list-item-${index}`"
            :class="[
              selectedProviderIndex === index ? 'opacity-100 hover:bg-neutral-800' : 'opacity-50 hover:opacity-60 hover:bg-neutral-900',
              'flex items-center gap-3 cursor-pointer px-3 py-2 rounded-md'
            ]"
            @click="() => selectedProviderIndex === index ? selectedProviderIndex = -1 : selectedProviderIndex = index"
          >
            <div
              :class="[
                selectedProviderIndex === index ? 'opacity-100' : 'opacity-0',
                'w-8 h-auto'
              ]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m10.6 13.8l-2.15-2.15q-.275-.275-.7-.275t-.7.275q-.275.275-.275.7t.275.7L9.9 15.9q.3.3.7.3t.7-.3l5.65-5.65q.275-.275.275-.7t-.275-.7q-.275-.275-.7-.275t-.7.275zM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22"/></svg>
            </div>
            <ui-name-icon :identifier="item.nameIcon" class="w-6 h-auto" />
            <p>
              {{ item.label }}
            </p>
          </li>
        </ul>
      </div>

      <template #footer>
        <div class="flex items-center gap-3">
          <UButton label="Cancel" variant="ghost" @click="() => isOpen = false" />
          <div class="grow" />
          <UButton
            v-if="selectedProviderIndex > -1"
            :disabled="selectedProviderIndex < 0"
            label="Setup"
            @click="onClickSetup"
          />
          <p v-else class="text-sm opacity-40">
            Please select a provider/platform to setup.
          </p>
        </div>
      </template>
    </UCard>
  </UModal>


  <dialog-setup-google-cloud-storage ref="refSetupGoogleCloudStorage" />
</template>

<script setup>
const providers = [
  {
    label: 'GCP: Google Cloud Storage',
    nameIcon: 'gcp',
    run: () => refSetupGoogleCloudStorage.value.open()
  }
]

const isOpen = ref(false)
const refSetupGoogleCloudStorage = ref(null)
const selectedProviderIndex = ref(-1)

watch(isOpen, (value) => {
  if (!value) {
    selectedProviderIndex.value = -1
  }
})

const open = function () {
  isOpen.value = true
}

const close = function () {
  isOpen.value = false
}

const onClickSetup = function () {
  const provider = providers[selectedProviderIndex.value]

  if (!provider) {
    return
  }

  close()
  provider.run()
}

defineExpose({ open, close })
</script>
