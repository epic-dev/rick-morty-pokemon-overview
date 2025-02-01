<script setup lang="ts">
import type { CharacterUnifiedItem } from '~/shared/interfaces/CharacterUnifiedItem'

const props = defineProps<{
  characters: CharacterUnifiedItem[]
  characterDetailsLocation: string
}>()
console.warn(props.characters)
const store = useViewModeStore()

const selectedMode = ref(store.currentMode === 'list')

watch(selectedMode, () => {
  store.changeMode(selectedMode.value ? 'list' : 'grid')
})
</script>

<template>
  <div class="px-8 mb-4">
    <ul class="rounded-md dark:bg-zinc-600 bg-zinc-100 bg-opacity-50 mx-auto max-w-7xl">
      <li v-for="character in characters" :key="character.name">
        <ULink :to="`${characterDetailsLocation}/${character.id}`">
          <HoverableContainer class="py-4">
            <div class="group">
              <p class="capitalize font-exo">
                {{ character.name }}
              </p>
            </div>
          </HoverableContainer>
        </ULink>
      </li>
    </ul>
  </div>
</template>
