<script lang="ts" setup>
// assume this is being fetched from somewhere
// TODO move to the store
const tvShows = [
  {
    id: 'rickandmortyId',
    label: 'Rick & Morty',
    location: 'rickandmorty',
    imageUrl: '~/rick-and-morty-card.png',
  },
  {
    id: 'pokemonId',
    label: 'Pokémon',
    location: 'pokemon',
    imageUrl: '/images/pokemon.png',
  },
]
</script>

<template>
  <div class="flex justify-center flex-wrap gap-10">
    <ULink v-for="tvShow in tvShows" :key="tvShow.id" :to="tvShow.location">
      <OverviewCard :title="tvShow.label" :image-url="tvShow.imageUrl" />
    </ULink>
  </div>
</template>
