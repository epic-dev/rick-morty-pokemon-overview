<script setup lang="ts">
import type { RickAndMortyApiResponse } from '~/shared/interfaces/api/rickAndMorty/RickAndMortyApiResponse'
import { mapRickAndMortyApiResponseToViewModel } from '~/mapper/dataToViewModel'

const { data: { value } } = await useRickAndMortyData<RickAndMortyApiResponse>('/character')

const characters = shallowRef(mapRickAndMortyApiResponseToViewModel(value))
const { name: characterDetailsLocation } = useRoute()

const store = useViewModeStore()

const selectedMode = ref(store.currentMode)

// FIXME: DRY
watch(selectedMode, () => {
  store.changeMode(selectedMode.value ? 'list' : 'grid')
})
</script>

<template>
  <section>
    <OverviewPageHeader title="Wubba Lubba Dub Dub!" />
    <OverviewCharacterList v-if="selectedMode === 'list'" :characters="characters" :character-details-location="characterDetailsLocation" />
  </section>
</template>
