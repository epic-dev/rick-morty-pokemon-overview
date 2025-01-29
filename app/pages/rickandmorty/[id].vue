<script setup lang="ts">
import type { IRickAndMortyCharacterApiResponse } from '~/interfaces/api/IRickAndMortyCharacterApiResponse'

// FIXME composable useRickAndMortyData() is not working for some reason, could not be found
const { data: { value } } = await useAsyncData<IRickAndMortyCharacterApiResponse>(
  'rickAndMorty',
  () => $fetch('https://rickandmortyapi.com/api/character'),
)
console.warn(value?.results)
</script>

<template>
  <UContainer>
    <p>Rick & Morty: character details page</p>
  </UContainer>
</template>
