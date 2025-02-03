<script lang="ts" setup>
const props = defineProps<{
  to?: string
  cb?: () => void
}>()

const router = useRouter()
function navBack() {
  router.back()
  if (props.cb) {
    props.cb()
  }
}
</script>

<template>
  <div class="flex">
    <UButton :to="props.to" variant="link" label="Back" icon="i-heroicons-chevron-left" class="w-8 h-4" @click="navBack" />
  </div>
</template>
