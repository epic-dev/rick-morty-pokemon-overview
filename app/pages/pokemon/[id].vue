<script setup lang="ts">
import type { Pokemon } from '~/shared/interfaces/api/pokemon/Pokemon'

const route = useRoute()
const params = route.params as { id: string } // FIXME: there is should be better way
const { data: { value: pokemon } } = await usePokemonData<Pokemon>(`/pokemon/${params.id}`)
</script>

<template>
  <UContainer class="py-8">
    <OverviewCharacterDetails :character-name="pokemon?.name" :character-image-url="pokemon?.sprites.front_default">
      <template #characterSpecs>
        <div class="flex sm:gap-6 gap-4 flex-col">
          <div class="grid grid-cols-3 grid-rows-2 justify-items-center items-center gap-x-2">
            <span class="uppercase sm:text-xs text-[0.5rem]">Height</span>
            <span class="uppercase sm:text-xs text-[0.5rem]">Weight</span>
            <span class="uppercase sm:text-xs text-[0.5rem]">EXP</span>
            <span class="sm:text-3xl text-xl font-bold">{{ pokemon?.height }}</span>
            <span class="sm:text-3xl text-xl font-bold">{{ pokemon?.weight }}</span>
            <span class="sm:text-3xl text-xl font-bold">{{ pokemon?.base_experience }}</span>
          </div>
          <div class="grid grid-cols-1 grid-rows-2 justify-items-center items-center">
            <span class="uppercase sm:text-xs text-[0.5rem]">
              Abilities
            </span>
            <ul v-if="pokemon?.abilities">
              <li v-for="{ ability, is_hidden } in pokemon?.abilities" :key="ability.name">
                <span class="pr-2">{{ ability.name }}</span>
                <UBadge v-if="!is_hidden" color="white" variant="solid" size="xs">
                  hidden
                </UBadge>
              </li>
            </ul>
          </div>
        </div>
      </template>
    </OverviewCharacterDetails>
  </UContainer>
</template>
