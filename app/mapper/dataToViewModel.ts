import type { PokemonApiResponse } from '~/shared/interfaces/api/pokemon/PokemonApiResponse'
import type { PokemonResponseItem } from '~/shared/interfaces/api/pokemon/PokemonResponseItem'
import type { Character } from '~/shared/interfaces/api/rickAndMorty/Character'
import type { RickAndMortyApiResponse } from '~/shared/interfaces/api/rickAndMorty/RickAndMortyApiResponse'
import type { CharacterUnifiedItem } from '~/shared/interfaces/CharacterUnifiedItem'

function pokemonItemMapper(item: PokemonResponseItem): CharacterUnifiedItem {
  return {
    id: item.name,
    name: item.name,
    detailsLocation: item.url,
  }
}

function rmItemMapper(item: Character): CharacterUnifiedItem {
  return {
    id: String(item.id),
    name: item.name,
    detailsLocation: item.url,
  }
}

function dataToViewModel<T>(data: T[], mapper: (item: T) => CharacterUnifiedItem): CharacterUnifiedItem[] {
  return data.map(mapper)
}

export function mapPokemonApiResponseToViewModel(response: PokemonApiResponse | null) {
  if (!response) {
    return [] as CharacterUnifiedItem[]
  }
  return dataToViewModel<PokemonResponseItem>(response.results, pokemonItemMapper)
}

export function mapRickAndMortyApiResponseToViewModel(response: RickAndMortyApiResponse | null) {
  if (!response) {
    return [] as CharacterUnifiedItem[]
  }
  return dataToViewModel<Character>(response.results, rmItemMapper)
}
