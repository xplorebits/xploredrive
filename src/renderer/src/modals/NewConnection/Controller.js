import { useModal } from 'vue-final-modal'

import ModalView from './ModalView.vue'

export const useNewConnectionModal = () => {
  const { open: openModal, close: closeModal } = useModal({
    component: ModalView,
    attrs: {
      onConfirm() {
        close()
      }
    },
    slots: {
      default: '<p>UseModal: The content of the modal</p>'
    }
  })

  const open = function () {
    return openModal()
  }

  const close = function () {
    return closeModal()
  }

  return { open, close }
}
