<script setup lang="ts">
import type { PokemonApiResponse } from '~/shared/interfaces/api/pokemon/PokemonApiResponse'
import { mapPokemonApiResponseToViewModel } from '~/utils/dataToViewModel'

definePageMeta({
  layout: 'overview',
})

// ?offset=10&limit=20
const {
  data: { value },
} = await usePokemonData<PokemonApiResponse>('/pokemon')

const pokemonList = mapPokemonApiResponseToViewModel(value)
const store = useViewModeStore()

const { name: characterDetailsLocation } = useRoute()
</script>

<template>
  <OverviewPageHeader title="Gotta catch 'em all!" />
  <OverviewCharacterList
    v-if="store.currentMode === 'list'"
    :characters="pokemonList"
    :character-details-location="characterDetailsLocation"
  />

  <UCard v-else-if="store.currentMode === 'grid'">
    <p>pokemon grid</p>
  </UCard>
</template>
