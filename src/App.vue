<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useQueryProvider } from "vue-query";

useQueryProvider()

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'vueInFreeTime',
  meta: [
    { name: 'description', content: 'hello world' },
  ],
})
</script>

<template>
  <router-view></router-view>
</template>
