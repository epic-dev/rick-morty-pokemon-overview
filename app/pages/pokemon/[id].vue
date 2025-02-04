<script setup lang="ts">
import type { Pokemon } from '~/shared/interfaces/api/pokemon/Pokemon'
import NavigateBack from '~/components/common/NavigateBack.vue'

const route = useRoute()
const params = route.params as { id: string } // FIXME: there is should be better way
const { data: { value: pokemon } } = await usePokemonData<Pokemon>(`/pokemon/${params.id}`)
const rows = ref([{
  height: pokemon?.height,
  weight: pokemon?.weight,
  exp: pokemon?.base_experience,
  abilities: pokemon?.abilities,
}])
</script>

<template>
  <UContainer class="py-8 space-y-4">
    <NavigateBack />
    <OverviewCharacterDetails :character-name="pokemon?.name" :character-image-url="pokemon?.sprites.front_default">
      <template #characterSpecs>
        <UTable :rows="rows">
          <template #abilities-data="{ row }">
            <ul>
              <li v-for="{ ability, is_hidden } in row?.abilities" :key="ability.name">
                <span class="pr-2">{{ ability.name }}</span>
                <UBadge v-if="!is_hidden" color="white" variant="solid" size="xs">
                  hidden
                </UBadge>
              </li>
            </ul>
          </template>
        </UTable>
      </template>
    </OverviewCharacterDetails>
  </UContainer>
</template>
