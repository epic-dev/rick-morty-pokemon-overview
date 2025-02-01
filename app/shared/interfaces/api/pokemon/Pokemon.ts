import type { StringUrl } from '~/types/StringUrl'
/**
 * many of the properties from the API are not used currently
 * so they are not listed here
 */
export interface Pokemon {
  id: number
  name: string
  is_default: boolean
  abilities: {
    ability: {
      name: string
      url: StringUrl
    }
    is_hidden: boolean
    slot: number
  }[]
  base_experience: 64
  height: number
  weight: number
  sprites: {
    front_default: StringUrl
  }
}
