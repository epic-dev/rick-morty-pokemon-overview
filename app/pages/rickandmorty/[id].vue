<script setup lang="ts">
import type { Character } from '~/shared/interfaces/api/rickAndMorty/Character'

const route = useRoute()
const params = route.params as { id: string }

const { data: { value: rmCharacter } } = await useRickAndMortyData<Character>(`/character/${params.id}`)
</script>

<template>
  <UContainer class="py-8">
    <OverviewCharacterDetails :character-name="rmCharacter?.name" :character-image-url="rmCharacter?.image">
      <template #characterSpecs>
        <p>Rick and Morty character specs</p>
      </template>
    </OverviewCharacterDetails>
  </UContainer>
</template>
