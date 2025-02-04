<script setup lang="ts">
import type { Character } from '~/shared/interfaces/api/rickAndMorty/Character'
import NavigateBack from '~/components/common/NavigateBack.vue'

const route = useRoute()
const params = route.params as { id: string }

const { data: { value: character } } = await useRickAndMortyData<Character>(`/character/${params.id}`)
const rows = ref([{
  type: character?.type,
  gender: character?.gender,
  status: character?.status,
  origin: character?.origin.name,
  location: character?.location.name,
  // episodes: character?.episode.length,
}])
</script>

<template>
  <UContainer class="py-8 space-y-4">
    <NavigateBack />
    <OverviewCharacterDetails :character-name="character?.name" :character-image-url="character?.image">
      <template #characterSpecs>
        <UTable :rows="rows" />
      </template>
    </OverviewCharacterDetails>
  </UContainer>
</template>
