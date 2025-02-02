<script setup lang="ts">
import type { CharacterUnifiedItem } from '~/shared/interfaces/CharacterUnifiedItem'

defineProps<{
  character: CharacterUnifiedItem
}>()
</script>

<template>
  <HoverableContainer>
    <div class="py-2 flex justify-between items-center">
      <p class="capitalize font-exo">
        {{ character.name }}
      </p>
      <UIcon name="i-heroicons-chevron-double-right" class="w-4 h-4 hidden group-hover:inline-block" />
    </div>
  </HoverableContainer>
</template>
