<template>
  <div>
    <h1>hello world</h1>
    <h2>{{ status }}</h2>
    <data-sender
      @sending-start="started"
      @sending-complete="completed"
    />
  </div>
</template>

<script setup lang='ts'>
const status = ref('')
const started = () => {
  status.value = 'started'
}

const completed = () => {
  status.value = 'done'
}
</script>

<style scoped>

</style>
