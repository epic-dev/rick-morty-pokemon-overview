import type { DateTimeString } from '~/types/DateTimeString'
import type { StringUrl } from '~/types/StringUrl'

export interface ICharacter {
  id: number
  name: string
  type: string
  dimension: string
  residents: StringUrl[]
  url: StringUrl
  created: DateTimeString
}
