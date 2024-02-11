export default defineAppConfig({
  ui: {
    primary: 'mariner',
    gray: 'cool',
    modal: {
      overlay: {
        background: 'bg-gray-200/75 dark:bg-black/75'
      }
    },
    card: {
      background: 'bg-white dark:bg-[#25292E]'
    },
    verticalNavigation: {
      base: 'dark:hover:bg-neutral-700',
      icon: {
        base: 'dark:hover:opacity-0'
      }
    }
  }
})
