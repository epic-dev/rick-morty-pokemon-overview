<script setup lang="ts">
import type { CharacterUnifiedItem } from '~/shared/interfaces/CharacterUnifiedItem'
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
  return !props.isList ? 'grid grid-cols-[repeat(auto-fit,minmax(12rem,_1fr))]' : 'max-w-5xl'
})

const itemClasses = computed(() => {
  /**
   * TODO configure color rather than conditional classes
   */
  // return !props.isList ? 'dark:odd:bg-neutral-700 dark:even:bg-neutral-800 odd:bg-slate-100 even:bg-slate-50' : 'dark:odd:bg-neutral-700 dark:even:bg-neutral-800 odd:bg-primary-100 even:bg-primary-50'
  return !props.isList ? 'dark:bg-gray-900 dark:hover:bg-gray-800/50 odd:bg-slate-100 even:bg-slate-50' : 'dark:bg-gray-900 dark:hover:bg-gray-800/50 bg-primary-100 hover:bg-primary-150/50'
})
</script>

<template>
  <ul :class="classes">
    <li
      v-for="character in characters" :key="character.name"
      class="rounded-md mb-1"
      :class="itemClasses"
    >
      <ULink :to="`${characterDetailsLocation}/${character.id}`">
        <HoverableContainer>
          <CharacterListItem :character="character" :is-list="isList" />
        </HoverableContainer>
      </ULink>
    </li>
  </ul>
</template>
