<template>
  <div ref="scrollContainer" class="h-60vh p-2 flex flex-col gap-2 overflow-auto dark:bg-gray-600  bg-gray-200 rounded-md">
    scroll inside this container

    <div v-for="item in items" :key="item + Math.random()" class=" text-center p-1rem dark:border-none dark:bg-green-500  border border-green-400 bg-green-200 rounded-md">
      {{ 'item ' + item }}
    </div>
    <div ref="el" class="text-center">
      {{ text }}
    </div>
    <div v-if="loading" class="w-full text-center">
      <p v-motion-fade>
        Loading...
      </p>
    </div>
  </div>
  <pre>intersect: {{ targetIsVisible }}
scroll position: {{ y }}</pre>
</template>

<script setup lang='ts'>
import { useIntersectionObserver, useScroll } from '@vueuse/core'
const items = ref([...Array(10)].map((_, i) => i))
const fakedata = [...Array(5)].map((_, i) => i)
const loading = ref(false)
const el = ref<HTMLElement | null>(null)
const scrollContainer = ref<HTMLElement | null>(null)
const targetIsVisible = ref(false)
const text = ref('Last item / you saw me')

const { y } = useScroll(scrollContainer)

useIntersectionObserver(
  el,
  ([{ isIntersecting }]) => {
    targetIsVisible.value = isIntersecting
  },
  { threshold: 0.9 },
)

const stopWatchInifiteScroll = watchEffect(() => {
  if (targetIsVisible.value) {
    loading.value = true
    setTimeout(() => {
      items.value.push(...fakedata)
      loading.value = false
      scrollContainer.value!.scrollBy(0, -100)
    }, 1000)
  }
})

watchEffect(() => {
  if (items.value.length > 60) {
    stopWatchInifiteScroll()
    text.value = 'stop, that\'s a lot of calls'
  }
})

</script>
