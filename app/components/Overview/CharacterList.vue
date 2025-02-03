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
</script>

<template>
  <div class="px-8 mb-4">
    <ul :class="classes">
      <li
        v-for="character in characters" :key="character.name"
        class="rounded-md dark:odd:bg-neutral-700 dark:even:bg-neutral-800 odd:bg-slate-100 even:bg-slate-50 mb-1"
      >
        <ULink :to="`${characterDetailsLocation}/${character.id}`">
          <CharacterListItem :character="character" :is-list="isList" />
        </ULink>
      </li>
    </ul>
  </div>
</template>
