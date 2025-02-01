import type { PokemonResponseItem } from './PokemonResponseItem'
import type { StringUrl } from '~/types/StringUrl'

export interface PokemonApiResponse {
  count: number
  next: StringUrl
  previous: StringUrl | null
  results: PokemonResponseItem[]
}
