import type { DateTimeString } from '~/shared/types/DateTimeString'
import type { StringUrl } from '~/shared/types/StringUrl'

export interface Character {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: {
    name: string
    url: StringUrl
  }
  location: {
    name: string
    url: StringUrl
  }
  image: StringUrl
  episode: StringUrl[]
  url: StringUrl
  created: DateTimeString
}
