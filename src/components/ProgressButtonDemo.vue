<template>
  <div class="space-y-4">
    I'm a demo {{ text }} component
    <slot></slot>
    <progress-button :val="percentage" :selected="selected" @select="handleClick()" />
    <input
      v-model="percentage"
      type="number"
      min="0"
      class="px-2 border-2 dark:text-black"
      placeholder="enter %"
    >
  </div>
</template>

<script setup lang='ts'>
defineProps(['text'])

const selected = ref(false)
const percentage = ref('0')
const handleClick = () => selected.value = !selected.value

</script>

<style scoped>
div {
  @apply block py-2 px-4  my-5 outline-dotted-dark-50 dark:outline-dotted-light-200 ;
}
</style>
