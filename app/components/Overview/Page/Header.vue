<script setup lang="ts">
import type { ViewMode } from '~/types/ViewMode'

interface IProps {
  title: string
}
const props = defineProps<IProps>()
const viewMode = useViewModeStore()
console.warn(viewMode)
</script>

<template>
  <header class="flex items-center px-8 py-4 mx-auto max-w-7xl">
    <h1 class="grow md:text-4xl sm:text-3xl text-2xl font-exo text-gray-700 dark:text-gray-200">
      {{ props.title }}
    </h1>
    <div class="flex self-end">
      <UButtonGroup size="xl" orientation="horizontal">
        <UButton icon="i-heroicons-table-cells" variant="ghost" color="gray" />
        <UButton icon="i-heroicons-list-bullet" variant="ghost" color="gray" />
      </UButtonGroup>
    </div>
  </header>
</template>
