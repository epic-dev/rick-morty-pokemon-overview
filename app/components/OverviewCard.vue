<script lang="ts" setup>
import type { StringUrl } from '~/types/StringUrl'
import HoverableContainer from './HoverableContainer.vue'

defineProps<{
  title: string
  imageUrl: StringUrl
}>()
</script>

<template>
  <HoverableContainer>
    <div class="image_container_FIXME">
      <NuxtImg
        :alt="title" sizes="lg:200px md:180px 160px" :src="imageUrl"
        class="filter grayscale group-hover:grayscale-0" placeholder
      />
    </div>
    <div class="px-8 py-4">
      <h3
        class="text-slate-700 dark:text-white group-hover:text-black dark:group-hover:text-white text-center font-bold lg:text-2xl md:text-xl text-md"
      >
        {{ title }}
      </h3>
    </div>
  </HoverableContainer>
</template>

<style scoped></style>
