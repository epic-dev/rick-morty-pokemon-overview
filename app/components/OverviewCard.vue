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
    border
    border-white
    rounded-md
    hover:shadow-inner
    hover:shadow-white
    hover:bg-white
    hover:bg-opacity-0
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
          text-white
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
