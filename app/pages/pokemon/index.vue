<script setup lang="ts">
import type { PokemonApiResponse } from '~/shared/interfaces/api/pokemon/PokemonApiResponse'
import { mapPokemonApiResponseToViewModel } from '~/mapper/dataToViewModel'

// ?offset=10&limit=20
const { data: { value } } = await usePokemonData<PokemonApiResponse>('/pokemon')

const pokemonList = mapPokemonApiResponseToViewModel(value)
const store = useViewModeStore()

const selectedMode = ref(store.currentMode)

// FIXME: DRY
watch(selectedMode, () => {
  store.changeMode(selectedMode.value ? 'list' : 'grid')
})

const { name: characterDetailsLocation } = useRoute()
</script>

<template>
  <section>
    <OverviewPageHeader title="Gotta catch 'em all!" />
    <OverviewCharacterList v-if="selectedMode === 'list'" :characters="pokemonList" :character-details-location="characterDetailsLocation" />

    <UCard v-else-if="selectedMode === 'grid'">
      <p>pokemon grid</p>
    </UCard>
  </section>
</template>
