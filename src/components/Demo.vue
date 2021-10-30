<template>
  <div>
    I'm a demo {{ text }} component
    <slot></slot>
  </div>
</template>

<script setup lang='ts'>
defineProps(['text'])
</script>

<style scoped>
div {
  @apply block py-2 px-4  my-5 outline-dotted-light-200 ;
}
</style>
