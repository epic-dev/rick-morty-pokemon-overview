import type { StringUrl } from '~/types/StringUrl'

export interface IRickAndMortyApiResponseFragment {
  info: {
    count: number
    pages: number
    next: StringUrl
    prev: StringUrl | null
  }
}
