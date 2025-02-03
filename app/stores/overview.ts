import { defineStore } from 'pinia'

export const useOverviewStoreStore = defineStore('overview', () => {
  type TvShowOverviewLocation = 'pokemon' | 'rick-and-morty'
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
      location: 'rick-and-morty',
      imageUrl: '/images/rick-and-morty-overview-card.png',
    },
    {
      id: 'PokemonShowId',
      label: 'Pokémon',
      location: 'pokemon',
      imageUrl: '/images/pokemon-overview-card.png',
    },
  ]
  return {
    tvShows,
  }
})
