import type { ViewMode } from '~/types/ViewMode'
import { defineStore } from 'pinia'

export const useViewModeStore = defineStore('viewMode', () => {
  const currentMode = ref<ViewMode>('list')

  const changeMode = (mode: ViewMode) => {
    currentMode.value = mode
  }
  return {
    currentMode,
    changeMode,
  }
})
