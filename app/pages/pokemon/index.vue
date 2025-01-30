<script setup lang="ts">
import type { StringUrl } from '~/types/StringUrl'
import type { ViewMode } from '~/types/ViewMode'

interface IApiResponseFragment {
  count: number
  next: StringUrl
  previous: StringUrl | null
}
interface IPokemonApiResponse extends IApiResponseFragment {
  results: {
    name: string
    url: StringUrl
  }[]
}
// ?offset=10&limit=20
const { data: { value } } = usePokemonData<IPokemonApiResponse>('/pokemon')

const pokemonList = value?.results
const store = useViewModeStore()

const selectedMode = ref(store.currentMode === 'list')

watch(selectedMode, () => {
  store.changeMode(selectedMode.value ? 'list' : 'grid')
})
</script>

<template>
  <section>
    <header class="flex items-center px-8 py-4 mx-auto max-w-7xl">
      <h1 class="grow md:text-4xl sm:text-3xl text-2xl font-exo text-gray-700 dark:text-gray-200">
        Gotta catch 'em all!
      </h1>
      <div class="flex self-end">
        <UButtonGroup size="xl" orientation="horizontal">
          <UButton icon="i-heroicons-table-cells" variant="ghost" color="gray" />
          <UButton icon="i-heroicons-list-bullet" variant="ghost" color="gray" />
        </UButtonGroup>
      </div>
    </header>

    <div v-if="selectedMode" class="px-8 mb-4">
      <ul class="rounded-md dark:bg-zinc-600 bg-zinc-100 bg-opacity-50 mx-auto max-w-7xl">
        <li v-for="pokemon in pokemonList" :key="pokemon.name">
          <NuxtLink :to="`pokemon/${pokemon.name}`">
            <HoverableContainer class="py-4">
              <div class="group">
                <p class="capitalize font-exo">
                  {{ pokemon.name }}
                </p>
              </div>
            </HoverableContainer>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <UCard v-else-if="!selectedMode">
      <p>pokemon grid</p>
    </UCard>
  </section>
</template>
