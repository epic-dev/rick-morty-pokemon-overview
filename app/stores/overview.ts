import type { ContentOverview } from '~/constants'
import { defineStore } from 'pinia'

export const useOverviewStore = defineStore('overview', () => {
  const selectedOverview = ref<ContentOverview | null>(null)

  return {
    selectedOverview,
  }
})
