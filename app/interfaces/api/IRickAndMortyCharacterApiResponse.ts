import type { ICharacter } from './ICharacter'
import type { IRickAndMortyApiResponseFragment } from './IRickAndMortyApiResponseFragment'

export interface IRickAndMortyCharacterApiResponse extends IRickAndMortyApiResponseFragment {
  results: ICharacter[]
}
