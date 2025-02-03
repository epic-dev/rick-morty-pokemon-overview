<script setup lang="ts">
import type { ViewMode } from '~/shared/types/ViewMode'

interface IProps {
  title: string
}
const props = defineProps<IProps>()
const store = useViewModeStore()

function selectViewMode(value: ViewMode) {
  store.changeMode(value)
}
const active = computed(() => {
  return 'dark:bg-gray-700 bg-slate-200 text-primary-500'
})
</script>

<template>
  <header class="flex items-center px-8 py-4 mx-auto max-w-7xl">
    <h1
      class="grow md:text-4xl sm:text-3xl text-2xl font-exo text-gray-700 dark:text-gray-200"
    >
      {{ props.title }}
    </h1>
    <div class="flex self-end">
      <UButtonGroup size="md" orientation="horizontal">
        <UButton
          icon="i-heroicons-table-cells"
          variant="ghost"
          :class="{ [active]: store.currentMode === 'grid' }"
          @click="selectViewMode('grid')"
        />
        <UButton
          icon="i-heroicons-list-bullet"
          variant="ghost"
          :class="{ [active]: store.currentMode === 'list' }"
          @click="selectViewMode('list')"
        />
      </UButtonGroup>
    </div>
  </header>
</template>
