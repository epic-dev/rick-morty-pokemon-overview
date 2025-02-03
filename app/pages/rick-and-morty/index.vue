<script setup lang="ts">
import type { RickAndMortyApiResponse } from '~/shared/interfaces/api/rickAndMorty/RickAndMortyApiResponse'
import { useBackNavigation } from '~/composables/useBackNavigation'
import { ITEMS_PER_PAGE_COUNT } from '~/shared/constants/consts'
import { mapRickAndMortyApiResponseToViewModel } from '~/utils/dataToViewModel'

definePageMeta({
  layout: 'overview',
})

const { currentPage, willGetBackTo } = useBackNavigation()

const totalCount = ref(0)
const isLoading = ref(false)

const characters = shallowRef()

watch(
  currentPage,
  async (page) => {
    console.warn('debug LOAD DATA')
    isLoading.value = true
    try {
      const {
        data: { value },
      } = await useRickAndMortyData<RickAndMortyApiResponse>(
        `/character/?page=${page}`,
      )

      characters.value = mapRickAndMortyApiResponseToViewModel(value)
      totalCount.value = value?.info.count || 0
    }
    catch (e) {
      // add environment check, out logs to the console in dev only
      console.warn(e)
    }
    finally {
      isLoading.value = false
      willGetBackTo(page)
    }
  },
  { immediate: true },
)

const { name: characterDetailsLocation } = useRoute()

const store = useViewModeStore()
</script>

<template>
  <OverviewPageHeader title="Wubba Lubba Dub Dub!" />
  <div v-if="isLoading" class="flex items-center justify-center">
    <UIcon name="i-heroicons-arrow-path" class="animate-spin w-8 h-8 text-gray-450" />
  </div>
  <div v-else class="px-8 mb-4 space-y-4">
    <OverviewCharacterList
      :is-list="store.currentMode === 'list'"
      :characters="characters"
      :character-details-location="characterDetailsLocation"
    />
    <div v-if="!isLoading" class="flex justify-end">
      <UPagination
        v-model="currentPage"
        :max="5"
        :page-count="ITEMS_PER_PAGE_COUNT"
        :total="totalCount"
      />
    </div>
  </div>
</template>
