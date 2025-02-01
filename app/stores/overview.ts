import { defineStore } from 'pinia'

export const useOverviewStoreStore = defineStore('overview', () => {
  type TvShowOverviewLocation = 'pokemon' | 'rickandmorty'
  interface ITvShow {
    id: string
    label: string
    location: TvShowOverviewLocation
    imageUrl: string
  }
  const tvShows: ITvShow[] = [
    {
      id: 'RickAndMortyShowId',
      label: 'Rick & Morty',
      location: 'rickandmorty',
      imageUrl: '/images/rick-and-morty-overview-card.png',
    },
    {
      id: 'PokemonShowId',
      label: 'Pokémon',
      location: 'pokemon',
      imageUrl: '/images/pokemon-overview-card.png',
    },
  ]
  // FIXME unlikely necessary
  const selectedOverview = ref<TvShowOverviewLocation | null>(null)
  function selectOverview(value: TvShowOverviewLocation) {
    selectedOverview.value = value
  }
  return {
    tvShows,
    selectedOverview,
    selectOverview,
  }
})
