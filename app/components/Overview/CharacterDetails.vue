<script setup lang="ts">
import type { StringUrl } from '~/types/StringUrl'

const props = defineProps<{
  characterName?: string
  characterImageUrl?: StringUrl
}>()

const name = computed(() => {
  return props.characterName || 'unknown'
})
</script>

<template>
  <div class="flex items-start p-6 rounded-md dark:bg-zinc-800 bg-gray-200">
    <div class="rounded-md border dark:border-slate-700 dark:bg-zinc-700 border-gray-400 bg-gray-100">
      <NuxtImg :alt="name" width="120px" :src="characterImageUrl" />
    </div>
    <UContainer>
      <div class="pb-4">
        <h2 class="capitalize sm:text-4xl text-2xl font-exo">
          {{ name }}
        </h2>
      </div>
      <slot name="characterSpecs" />
    </UContainer>
  </div>
</template>
