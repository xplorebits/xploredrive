<template>
  <div class="flex items-center gap-3 h-full px-3">
    <p class="text-sm text-body opacity-80">{{ connection?.name }}</p>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6z"/></svg>
    <p class="text-sm text-body opacity-80">{{ activeNode?.name || '' }}</p>

    <div class="grow" />

    <button
      v-if="activeFolderId"
      title="Delete Selected File"
      class="app-window-no-drag border border-input-border p-1.5 rounded bg-transparent hover:bg-input-border"
    >
      <div class="w-5 h-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="auto" height="auto" viewBox="0 0 24 24"><path fill="currentColor" d="M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5q0-.425.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5q0 .425-.288.713T19 6v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zm-7 11q.425 0 .713-.288T11 16V9q0-.425-.288-.712T10 8q-.425 0-.712.288T9 9v7q0 .425.288.713T10 17m4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.712T14 8q-.425 0-.712.288T13 9v7q0 .425.288.713T14 17M7 6v13z"/></svg>
      </div>
    </button>

    <Popper placement="bottom">
      <button
        title="Directory Options"
        class="app-window-no-drag border border-input-border p-1.5 rounded bg-transparent hover:bg-input-border"
      >
        <div class="w-5 h-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="auto" height="auto" viewBox="0 0 256 256"><path fill="currentColor" d="M128 98a30 30 0 1 0 30 30a30 30 0 0 0-30-30m0 48a18 18 0 1 1 18-18a18 18 0 0 1-18 18m0-68a30 30 0 1 0-30-30a30 30 0 0 0 30 30m0-48a18 18 0 1 1-18 18a18 18 0 0 1 18-18m0 148a30 30 0 1 0 30 30a30 30 0 0 0-30-30m0 48a18 18 0 1 1 18-18a18 18 0 0 1-18 18"/></svg>
        </div>
      </button>

      <template #content>
        <div class="w-fit bg-gray-800 mx-2 rounded shadow">
          <ul class="space-y-1 py-2">
            <li>
              <button class="text-body text-sm pl-3 pr-10 py-2 w-full text-left flex items-center gap-2 hover:bg-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M13 3v9.586l3.5-3.5l1.414 1.414L12 16.414L6.086 10.5L7.5 9.086l3.5 3.5V3zM4.5 14v5h15v-5h2v7h-19v-7z"/></svg>
                Download folder
              </button>
            </li>
            <li>
              <button class="text-body text-sm pl-3 pr-10 py-2 w-full text-left flex items-center gap-2 hover:bg-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M9 18q-.825 0-1.412-.587T7 16V4q0-.825.588-1.412T9 2h9q.825 0 1.413.588T20 4v12q0 .825-.587 1.413T18 18zm0-2h9V4H9zm-4 6q-.825 0-1.412-.587T3 20V6h2v14h11v2zm4-6V4z"/></svg>
                Copy directory path
              </button>
            </li>
            <li>
              <button class="text-body text-sm pl-3 pr-10 py-2 w-full text-left flex items-center gap-2 hover:bg-gray-900" @click="() => emits('delete-folder', activeNode.path)">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z"/></svg>
                Delete directory
              </button>
            </li>
            <li>
              <button class="text-body text-sm pl-3 pr-10 py-2 w-full text-left flex items-center gap-2 hover:bg-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17q.425 0 .713-.288T13 16v-4q0-.425-.288-.712T12 11q-.425 0-.712.288T11 12v4q0 .425.288.713T12 17m0-8q.425 0 .713-.288T13 8q0-.425-.288-.712T12 7q-.425 0-.712.288T11 8q0 .425.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20m0-8"/></svg>
                Info
              </button>
            </li>
          </ul>
        </div>
      </template>
    </Popper>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import Popper from "vue3-popper";

defineProps({
  activeFolderId: {
    type: String,
    default: () => {
      return ''
    }
  },
  connection: {
    type: Object,
    default: () => {
      return {}
    }
  },
  activeNode: {
    type: Object,
    default: () => {
      return {}
    }
  }
})

const emits = defineEmits(['delete-folder'])
</script>
