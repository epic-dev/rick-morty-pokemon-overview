<script setup lang="ts">
import type { RickAndMortyApiResponse } from '~/shared/interfaces/api/rickAndMorty/RickAndMortyApiResponse'
import { ITEMS_PER_PAGE_COUNT } from '~/shared/constants/consts'
import { mapRickAndMortyApiResponseToViewModel } from '~/utils/dataToViewModel'

definePageMeta({
  layout: 'overview',
})

const currentPage = ref(1)
const totalCount = ref(0)
const isLoading = ref(false)

const characters = shallowRef()

watch(
  currentPage,
  async () => {
    isLoading.value = true
    try {
      const {
        data: { value },
      } = await useRickAndMortyData<RickAndMortyApiResponse>(
        `/character/?page=${currentPage.value}`,
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
    }
  },
  { immediate: true },
)

const { name: characterDetailsLocation } = useRoute()

const store = useViewModeStore()
</script>

<template>
  <OverviewPageHeader title="Wubba Lubba Dub Dub!" />
  <div class="px-8 mb-4 space-y-4">
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
