import type { StringUrl } from '~/types/StringUrl'

/**
 * Utility interface to use it in a list of characters
 */
export interface CharacterUnifiedItem {
  id: string
  name: string
  image?: StringUrl
  detailsLocation: string
}
