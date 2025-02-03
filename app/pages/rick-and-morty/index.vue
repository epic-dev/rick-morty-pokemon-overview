<script setup lang="ts">
import type { RickAndMortyApiResponse } from '~/shared/interfaces/api/rickAndMorty/RickAndMortyApiResponse'
import { mapRickAndMortyApiResponseToViewModel } from '~/utils/dataToViewModel'

definePageMeta({
  layout: 'overview',
})
const {
  data: { value },
} = await useRickAndMortyData<RickAndMortyApiResponse>('/character')

const characters = shallowRef(mapRickAndMortyApiResponseToViewModel(value))
const { name: characterDetailsLocation } = useRoute()

const store = useViewModeStore()
</script>

<template>
  <OverviewPageHeader title="Wubba Lubba Dub Dub!" />
  <OverviewCharacterList
    :is-list="store.currentMode === 'list'"
    :characters="characters"
    :character-details-location="characterDetailsLocation"
  />
</template>
