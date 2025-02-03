<script setup lang="ts">
import type { Character } from '~/shared/interfaces/api/rickAndMorty/Character'
import NavigateBack from '~/components/common/NavigateBack.vue'

const route = useRoute()
const params = route.params as { id: string }

const { data: { value: rmCharacter } } = await useRickAndMortyData<Character>(`/character/${params.id}`)
</script>

<template>
  <UContainer class="py-8 space-y-4">
    <NavigateBack />
    <OverviewCharacterDetails :character-name="rmCharacter?.name" :character-image-url="rmCharacter?.image">
      <template #characterSpecs>
        <div class="grid grid-cols-2 gap-x-2 mb-4">
          <span class="uppercase">type:</span><span>{{ rmCharacter?.type || 'unknown' }}</span>
          <span class="uppercase">gender:</span><span>{{ rmCharacter?.gender || 'unknown' }}</span>
          <span class="uppercase">status:</span><span>{{ rmCharacter?.status || 'unknown' }}</span>
        </div>
        <div class="grid grid-cols-2 gap-x-2 mb-4">
          <span class="uppercase">Origin:</span><span>{{ rmCharacter?.origin.name || 'unknown' }}</span>
          <span class="uppercase">location:</span><span>{{ rmCharacter?.location.name || 'unknown' }}</span>
          <span class="uppercase">appears in:</span><span>{{ `${rmCharacter?.episode.length} episode(s)` }}</span>
        </div>
      </template>
    </OverviewCharacterDetails>
  </UContainer>
</template>
