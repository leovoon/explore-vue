<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useQueryProvider } from 'vue-query'
import { defineAsyncComponent } from 'vue'
const ClientReloadPrompt = typeof 'window' !== undefined
  ? defineAsyncComponent(() => import('~/components/AsyncReloadPrompt.vue'))
  : null

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
  <template v-if="ClientReloadPrompt">
    <ClientReloadPrompt />
  </template>
  <router-view></router-view>
</template>
