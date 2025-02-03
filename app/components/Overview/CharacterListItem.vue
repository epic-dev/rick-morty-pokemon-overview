<script setup lang="ts">
import type { CharacterUnifiedItem } from '~/shared/interfaces/CharacterUnifiedItem'

const props = defineProps<{
  character: CharacterUnifiedItem
  isList: boolean
}>()
const classes = computed(() => {
  return !props.isList ? 'flex-col' : ''
})
</script>

<template>
  <HoverableContainer>
    <div class="flex gap-4 items-start py-4" :class="classes">
      <div v-if="!isList" class="min-w-[6rem]">
        <NuxtImg :src="character.image" loading="lazy" width="120px" class="rounded-md" />
      </div>
      <UAvatar v-else :src="character.image" />
      <div class="flex flex-grow items-center justify-between w-full">
        <span class="capitalize font-exo">
          {{ character.name }}
        </span>
        <UIcon
          name="i-heroicons-chevron-double-right"
          class="min-w-4 min-h-4 invisible group-hover:visible"
        />
      </div>
    </div>
  </HoverableContainer>
</template>
