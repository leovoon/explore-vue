<template>
  <div>
    <button @click="sendData">
      Send Data
    </button>
  </div>
</template>

<script setup lang='ts'>
const emit = defineEmits(['sending-complete', 'sending-start'])

const sendData = (event: any) => {
  event.preventDefault()
  emit('sending-start')
  setTimeout(() => {
    emit('sending-complete', { duration: 2000, response: 'success' })
  }, 2000)
}

</script>

<style scoped>

</style>
