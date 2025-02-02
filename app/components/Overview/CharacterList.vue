<script setup lang="ts">
import type { CharacterUnifiedItem } from '~/shared/interfaces/CharacterUnifiedItem'
import CharacterListItem from './CharacterListItem.vue'

defineProps<{
  characters: CharacterUnifiedItem[]
  characterDetailsLocation: string
}>()
</script>

<template>
  <div class="px-8 mb-4">
    <ul class="max-w-7xl">
      <li
        v-for="character in characters" :key="character.name"
        class="rounded-md dark:odd:bg-neutral-700 dark:even:bg-neutral-800 odd:bg-slate-100 even:bg-slate-50 mb-1"
      >
        <ULink :to="`${characterDetailsLocation}/${character.id}`">
          <CharacterListItem :character="character" />
        </ULink>
      </li>
    </ul>
  </div>
</template>
