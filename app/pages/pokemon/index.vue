<script setup lang="ts">
interface IPokemonApiResponse {
  results: any[]
}
const { data: pokemonData } = usePokemonData<IPokemonApiResponse>('pokemon')
console.warn('pokemon', pokemonData)
</script>

<template>
  <UContainer>
    <h1>Pokemon list page</h1>
  </UContainer>
</template>
