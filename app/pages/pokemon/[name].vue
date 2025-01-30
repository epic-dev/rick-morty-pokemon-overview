<script setup lang="ts">
import type { IPokemonDetailsResponse } from '~/interfaces/api/IPokemonDetailsResponse'

const route = useRoute()
const params = route.params as { name: string } // FIXME: there is should be better way
const pokemonName = params.name
const { data: { value: pokemonData } } = await usePokemonData<IPokemonDetailsResponse>(`/pokemon/${params.name}`)

const pokemonImageUrl = pokemonData?.sprites.front_default
const abilities = pokemonData?.abilities
</script>

<template>
  <UContainer class="py-8">
    <div class="flex items-start p-6 rounded-md dark:bg-zinc-800 bg-gray-200">
      <div class="rounded-md border dark:border-slate-700 dark:bg-zinc-700 border-gray-400 bg-gray-100">
        <NuxtImg :alt="pokemonName" width="120px" :src="pokemonImageUrl" />
      </div>
      <UContainer>
        <div class="pb-4">
          <h2 class="capitalize sm:text-4xl text-2xl font-exo">
            {{ pokemonName }}
          </h2>
        </div>
        <div class="flex sm:gap-6 gap-4 flex-col">
          <div class="grid grid-cols-3 grid-rows-2 justify-items-center items-center">
            <span class="uppercase sm:text-xs text-[0.5rem]">Height</span>
            <span class="uppercase sm:text-xs text-[0.5rem]">Weight</span>
            <span class="uppercase sm:text-xs text-[0.5rem]">EXP</span>
            <span class="sm:text-3xl text-xl font-bold">{{ pokemonData?.height }}</span>
            <span class="sm:text-3xl text-xl font-bold">{{ pokemonData?.weight }}</span>
            <span class="sm:text-3xl text-xl font-bold">{{ pokemonData?.base_experience }}</span>
          </div>
          <div class="grid grid-cols-1 grid-rows-2 justify-items-center items-center">
            <span class="uppercase sm:text-xs text-[0.5rem]">
              Abilities
            </span>
            <ul v-if="abilities">
              <li v-for="{ ability, is_hidden } in abilities" :key="ability.name">
                <span class="pr-2">{{ ability.name }}</span>
                <UBadge v-if="!is_hidden" color="white" variant="solid" size="xs">
                  hidden
                </UBadge>
              </li>
            </ul>
          </div>
        </div>
      </UContainer>
    </div>
  </UContainer>
</template>
