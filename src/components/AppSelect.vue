<template>
  <div>
    <select>
      <option v-for="(option, idx) in options" :key="idx" :value="option.value">
        {{ option.value }}
      </option>
    </select>
  </div>
</template>

<script setup lang='ts'>

// eslint-disable-next-line import/named
import { PropType } from '@vue/runtime-core'

interface Option {
  value: string
  label?: string
}

defineProps({
  options: {
    type: Array as PropType<Option[]>,
    default: () => [],
  },
})
</script>

<style scoped>
select {
    @apply dark:bg-green-400 dark:text-gray-700 p-1 rounded-lg
}
</style>
