<template>
  <div>
    {{ ppp }}
    <test-parent @send-start="a => ppp = a" @send-completed="a => ppp= a"></test-parent>
  </div>
</template>

<script setup lang='ts'>
const ppp = ref('')
</script>

<style scoped>

</style>
