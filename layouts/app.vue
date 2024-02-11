<template>
  <div class="relative h-screen overflow-hidden">
    <div class="absolute top-0 bottom-0 left-0 w-[256px] overflow-y-auto border-r dark:border-gray-700 space-y-2 bg-[#1E2125]">
      <div class="relative flex items-center h-12 px-3">
        <p class="text-sm dark:text-gray-300">XploreDrive</p>
        <div class="grow" />
        <UButton
          class="z-50"
          icon="i-heroicons-chevron-left"
          size="sm"
          square
          variant="soft"
        />
      </div>
      <UVerticalNavigation :links="links" />
      <div class="sticky bottom-2 px-3">
        <UButton block color="primary" @click="() => refNewConnection.open()">New Connection</UButton>
      </div>
    </div>
    <div class="absolute top-0 bottom-0 left-[256px] w-[256px] border-r dark:border-gray-700" />
    <slot />
  </div>

  <dialog-new-connection ref="refNewConnection" />
</template>

<script setup>
const links = [
]

const refNewConnection = ref(null)
</script>

<style>
body {
  background-color: #25292E;
  color: #F6F8FA;
}
</style>