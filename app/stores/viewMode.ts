import type { ViewMode } from '~/shared/types/ViewMode'
import { defineStore } from 'pinia'

export const useViewModeStore = defineStore('viewMode', () => {
  const currentMode = ref<ViewMode>('grid')

  const changeMode = (mode: ViewMode) => {
    currentMode.value = mode
  }
  return {
    currentMode,
    changeMode,
  }
})
