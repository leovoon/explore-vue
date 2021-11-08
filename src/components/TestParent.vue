<template>
  <div>
    <h1>hello world</h1>
    <data-sender
      @sending-start="emit('send-start', 'started')"
      @sending-complete="emit('send-completed', state)"
    />
  </div>
</template>

<script setup lang='ts'>
const state = ref('state')
const emit = defineEmits(['send-start', 'send-completed'])
</script>

<style scoped>

</style>
