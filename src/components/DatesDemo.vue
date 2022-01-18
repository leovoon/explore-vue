<template>
  {{ timestamp }} <br>
  {{ formattedTimestamp }}   ✨ magic
</template>

<script setup lang='ts'>
import { useTimestamp } from '@vueuse/core'

const timestamp = useTimestamp()

const formattedTimestamp = computed(() => {
  const date = new Date(timestamp.value)
  return date.toLocaleString()
})

</script>

<style scoped>

</style>
