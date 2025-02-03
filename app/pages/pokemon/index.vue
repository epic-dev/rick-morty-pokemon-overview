<script setup lang="ts">
import type { Pokemon } from '~/shared/interfaces/api/pokemon/Pokemon'
import type { PokemonApiResponse } from '~/shared/interfaces/api/pokemon/PokemonApiResponse'
import type { CharacterUnifiedItem } from '~/shared/interfaces/CharacterUnifiedItem'
import { useBackNavigation } from '~/composables/useBackNavigation'
import { ITEMS_PER_PAGE_COUNT } from '~/shared/constants/consts'
import { mapPokemonApiResponseToViewModel } from '~/utils/dataToViewModel'

definePageMeta({
  layout: 'overview',
})

const { currentPage, willGetBackTo } = useBackNavigation()

const offset = computed(() => {
  return (currentPage.value - 1) * ITEMS_PER_PAGE_COUNT
})

const pokemonList = shallowRef()
const totalCount = ref(0)
const isLoading = ref(false)

watch(
  currentPage,
  async (page) => {
    isLoading.value = true
    const {
      data: { value: pokemonData },
    } = await usePokemonData<PokemonApiResponse>(
      `/pokemon/?offset=${offset.value}&limit=${ITEMS_PER_PAGE_COUNT}`,
    )

    pokemonList.value = mapPokemonApiResponseToViewModel(pokemonData)
    totalCount.value = pokemonData?.count || 0

    try {
      const pokemonRequests = pokemonList.value.map((pokemon: CharacterUnifiedItem) =>
        usePokemonData<Pokemon>(`/pokemon/${pokemon.id}`),
      )
      const pokemonResponses = await Promise.allSettled(pokemonRequests)
      const pokemonDetails = pokemonResponses
        .map((resp) => {
          if (resp.status === 'fulfilled') {
            return resp.value.data.value
          }

          return null
        })

      pokemonList.value = pokemonList.value.map((item: any) => {
        const pokDetails = pokemonDetails.find(details => details.name === item.name)
        return {
          ...item,
          image: pokDetails?.sprites.front_default,
        }
      })
    }
    catch (e) {
      console.warn(e)
    }
    isLoading.value = false
    willGetBackTo(page)
  },
  { immediate: true },
)

const store = useViewModeStore()

const { name: characterDetailsLocation } = useRoute()
</script>

<template>
  <OverviewPageHeader title="Gotta catch 'em all!" />
  <div v-if="isLoading" class="flex items-center justify-center">
    <UIcon name="i-heroicons-arrow-path" class="animate-spin w-8 h-8 text-gray-450" />
  </div>
  <div v-else class="px-8 mb-4 space-y-4">
    <OverviewCharacterList
      :is-list="store.currentMode === 'list'"
      :characters="pokemonList"
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
