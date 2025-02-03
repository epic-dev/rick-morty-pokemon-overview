<script setup lang="ts">
import type { Pokemon } from '~/shared/interfaces/api/pokemon/Pokemon'
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
const pokemonDetails = ref<Pokemon[]>([])
const store = useViewModeStore()

const { name: characterDetailsLocation } = useRoute()

onMounted(async () => {
  try {
    const pokemonRequests = pokemonList.map(pokemon => usePokemonData<Pokemon>(`/pokemon/${pokemon.id}`))
    const pokemonResponses = await Promise.allSettled(pokemonRequests)
    pokemonDetails.value = pokemonResponses.map((resp) => {
      if (resp.status === 'fulfilled') {
        return resp.value.data.value
      }

      return null
    }).filter(item => item !== null)
  }
  catch (e) {
    console.warn(e)
  }
})
// TODO inject image from details to characterList
</script>

<template>
  <OverviewPageHeader title="Gotta catch 'em all!" />
  <OverviewCharacterList
    :is-list="store.currentMode === 'list'"
    :characters="pokemonList"
    :character-details-location="characterDetailsLocation"
  />
</template>
