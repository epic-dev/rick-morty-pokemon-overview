<script setup lang="ts">
import type { CharacterUnifiedItem } from '~/shared/interfaces/CharacterUnifiedItem'
import HoverableContainer from '../common/HoverableContainer.vue'
import CharacterListItem from './CharacterListItem.vue'

const props = defineProps<{
  characters: CharacterUnifiedItem[]
  characterDetailsLocation: string
  isList: boolean
}>()

const classes = computed(() => {
  /**
   * to avoid re-render it is better to use conditional class rather than dynamic components
   */
  return !props.isList ? 'grid grid-cols-[repeat(auto-fit,minmax(12rem,_1fr))] gap-1' : ''
})

const itemClasses = computed(() => {
  // TODO configure ui.color rather than conditional classes
  return !props.isList ? '' : 'dark:bg-gray-900 bg-primary-100'
})
</script>

<template>
  <ul :class="classes">
    <li
      v-for="character in characters" :key="character.name"
      class="rounded-md mb-1"
    >
      <ULink :to="`${characterDetailsLocation}/${character.id}`">
        <HoverableContainer class="h-full" :class="itemClasses">
          <CharacterListItem :character="character" :is-list="isList" />
        </HoverableContainer>
      </ULink>
    </li>
  </ul>
</template>
