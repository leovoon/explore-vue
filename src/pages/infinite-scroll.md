---
title: Infinite scrolling in Vue 3
description: How to implement infinite scroll in Vue 3
---

<div class="text-center">
  <carbon-dicom-overlay class="text-4xl -mb-6 m-auto" />
  <h3>Implement infinite scrolling in Vue 3</h3>
  <p>useIntersectionObserver</p>
</div>

Idea inspired by [infinite scrolling in vue](https://blog.openreplay.com/infinite-scrolling-in-vue-using-the-vue-intersection-observer-api). In this example, we simplify the implementation by using vueuse intersection observer hook.

### Demo

<infinite-scroll-demo />


```html
<div ref="scrollContainer">
.
.
<div ref="targetEl">now u see me</div>
</div>
```

```js
<script setup lang='ts'>
import { useIntersectionObserver } from '@vueuse/core'

const items = [...Array(10).keys()] 
const fakeData = [...Array(5).keys()] 

// get element reference
const targetEl = ref<HTMLElement | null>(null) 
const scrollContainer = ref<HTMLElement | null>(null)

const targetIsVisible = ref(false)
const text = ref('Last item / you saw me')

// useIntersectionObserver
useIntersectionObserver(
  targetEl, 👈 
  ([{ isIntersecting }]) => {
    targetIsVisible.value = isIntersecting
  }
)

// watchEffect return a stop handler
const stopWatchInifiteScroll = watchEffect(() => {
  if (targetIsVisible.value) {
    loading.value = true

    // scenario: fetch more data
    setTimeout(() => {
      items.value.push(...fakedata)
      loading.value = false
      // when loaded, scroll up a bit 
      // to keep the user in the same scroll position
      scrollContainer.value!.scrollBy(0, -100)
    }, 1000)
  }
})

// condition to stop the watcher
watchEffect(() => {
  if (items.value.length > 60) {
    stopWatchInifiteScroll()
    text.value = 'stop, that\'s a lot of calls'
  }
})

```

This is a very straightforward implementation. The only thing to note is that we need to use the `useIntersectionObserver` hook to watch the visibility of the target element. Also, you can use `useScroll` to watch the scroll position when it reaches the bottom.

Happy Wednesday! <span class="animate-pulse">💖</span>