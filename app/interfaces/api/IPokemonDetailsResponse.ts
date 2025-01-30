import type { StringUrl } from '~/types/StringUrl'

/**
 * just a partial of the whole pokemon response
 * full object structure is out of the scope
 */
export interface IPokemonDetailsResponse {
  sprites: {
    front_default: string
  }
  height: number
  weight: number
  base_experience: number
  abilities: {
    ability: {
      name: string
      url: StringUrl
    }
    is_hidden: boolean
  }[]
}
