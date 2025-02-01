<script lang="ts" setup>
const store = useOverviewStoreStore()
const tvShows = store.tvShows
</script>

<template>
  <div class="flex justify-center flex-wrap gap-10">
    <ULink v-for="tvShow in tvShows" :key="tvShow.id" :to="tvShow.location">
      <OverviewCard :title="tvShow.label" :image-url="tvShow.imageUrl" />
    </ULink>
  </div>
</template>
