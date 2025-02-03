<script setup lang="ts">
const props = defineProps<{
  to: string
  label: string
  icon?: string
}>()
</script>

<template>
  <UButton :to="props.to" :label="props.label" variant="ghost" color="gray" :icon="props.icon" />
</template>
