<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
})
</script>

<template>
  <UContainer
    class="
    rounded-md
    border
    border-slate-700
    dark:border-white
    dark:hover:shadow-inner
    shadow-md
    hover:shadow-slate-700
    hover:bg-slate-700
    dark:hover:shadow-white
    dark:hover:bg-white
    dark:hover:bg-opacity-5
    hover:bg-opacity-5
    group"
  >
    <div class="image_container_FIXME">
      <NuxtImg
        :alt="title"
        sizes="lg:200px md:180px 160px" :src="imageUrl"
        class="filter grayscale group-hover:grayscale-0"
        placeholder
      />
    </div>
    <div class="px-8 py-4">
      <h3
        class="
        text-slate-700
        dark:text-white
        group-hover:text-black
        dark:group-hover:text-white
        text-center
        font-bold
        lg:text-2xl
        md:text-xl
        text-md"
      >
        {{ title }}
      </h3>
    </div>
  </UContainer>
</template>

<style scoped></style>
