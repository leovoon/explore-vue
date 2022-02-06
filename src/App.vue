<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useQueryProvider } from 'vue-query'
import { defineAsyncComponent } from 'vue'

// eslint-disable-next-line no-constant-condition
const AsyncReloadPrompt = typeof 'window' !== 'undefined'
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
  <router-view v-slot="{ Component }">
    <Transition name="scale" mode="out-in">
      <component :is="Component"></component>
    </Transition>
  </router-view>
  <ClientOnly>
    <AsyncReloadPrompt />
  </ClientOnly>
</template>

<style>
.scale-enter-active,
.scale-leave-active {
  transition: all 0.3s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.94);
}

</style>
