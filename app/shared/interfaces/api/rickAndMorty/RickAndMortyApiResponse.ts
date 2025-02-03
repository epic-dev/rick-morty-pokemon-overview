import type { Character } from './Character'
import type { StringUrl } from '~/shared/types/StringUrl'

export interface RickAndMortyApiResponse {
  info: {
    count: number
    pages: number
    next: StringUrl
    prev: StringUrl | null
  }
  results: Character[]
}
