<template>
  <div>
    {{ ppp }}
    <div v-if="isFinished">
      {{ data }}
    </div>
    <div v-show="isFetching">
      Loading..
    </div>
    <div v-show="error">
      Soething wrong at server
    </div>
    <test-parent @send-start="a => ppp = a" @send-completed="a => ppp= a"></test-parent>
  </div>
</template>

<script setup lang='ts'>
import { useFetch } from '@vueuse/core'
const bforef = ref('')

const { isFetching, isFinished, data, error } = useFetch('/api', {
  beforeFetch({ options }) {
    options.referrer = 'leo'
    options.headers
return { options }
  },
})

const ppp = ref('')

</script>

<style scoped>

</style>
