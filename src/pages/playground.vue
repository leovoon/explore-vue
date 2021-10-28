<template>
  <div class="w-full flex flex-col items-center justify-center">
    <h1>Playground</h1>

    <select v-model="selected">
      <option v-for="option in options" :key="option.mode" :value="option.mode">
        {{ option.label }}
      </option>
    </select>
    <app-button3>
      <template #[selected]="{mode}">
        {{ mode }}
      </template>
    </app-button3>
  </div>
</template>

<script lang="ts" setup>
const selected = ref('mode1')
const options = [
  { mode: 'mode1', label: 'Full name only' }, { mode: 'mode2', label: 'First name only' }, { mode: 'mode3', label: 'Full name with alphabetizing titles' }]
</script>

<route lang="yaml">
meta:
  layout: default
</route>

<style scoped>
select {
  @apply min-w-max rounded-full m-4 px-4 py-1 border appearance-none bg-transparent
}

caret {
  @apply absolute right-0 top-0
}
</style>
