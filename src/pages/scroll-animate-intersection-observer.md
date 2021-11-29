---
title: Sticky scrolling animation Vue 3
description: Implementing sticky scrolling animation using IntersectionObserver API
---

<div class="text-center">
  <!-- You can use Vue components inside markdown -->
  <carbon-dicom-overlay class="text-4xl -mb-6 m-auto" />
  <h3>Sticky scrolling animation</h3>
  <p>by using vueuse - useIntersectionObserver</p>
</div>

Animation inspired by [remix.run](https://remix.run/)

# Demo
<scroll-animate/>

# Code

TL;DR
```js
<div ref="sidebarRef" class="h-80vh grid content-center">
        trigger sidebar highlight
</div>
.
.
.
<div class="h-full p-2 border transition-colors ease-in-out"
     :class="sidebarVisible && 'bg-blue-300 outline-dotted-blue-500'">
              Sidebar
</div>
```

the usehook is based on [intersectionObserver MDN](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver).
```js
<script setup lang='ts'>
import { useIntersectionObserver } from '@vueuse/core'

const sidebarRef = ref(null)
const sidebarVisible = ref(false)
// const mainRef = ref(null)
// const mainVisible = ref(false)
// const adsRef = ref(null)
// const adsVisible = ref(false)

useIntersectionObserver(
  sidebarRef,
  ([{ isIntersecting }]) => {
    sidebarVisible.value = isIntersecting
  }, { threshold: 0.6 },
)

// useIntersectionObserver(
//   mainRef,
//   ([{ isIntersecting }]) => {
//     mainVisible.value = isIntersecting
//   }, { threshold: 0.6 },
// )

// useIntersectionObserver(
//   adsRef,
//   ([{ isIntersecting }]) => {
//     adsVisible.value = isIntersecting
//   }, { threshold: 0.6 },
// )
</script>
```

Happy learning ✨