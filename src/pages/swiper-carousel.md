---
title: Swipe carousel
description: How to make carousel using Vue and SwiperJs
---

<div class="text-center">
  <carbon-dicom-overlay class="text-4xl -mb-6 m-auto" />
  <h3>Swipe Carousel in Vue</h3>
  <p>How to make carousel using Vue 3 and Swiper 6</p>
</div>


<carousel>
</carousel>

### install SwiperJS package
```bash
npm i swiper
```

### logic
```js
<script setup lang='ts'>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

</script>
```

### view
```html
<template>
  <swiper
    :slides-per-view="3"
    :space-between="50"
  >
    <swiper-slide
      v-for="slide in 4"
      :key="slide"
      class="border p-2"
    >
    <!-- Element goes here -->
      <div class="w-20 border border-green-300 h-20">
        slide element {{ slide }}
      </div>
    <!-- Element goes here -->
    </swiper-slide>

  </swiper>
</template>
```

#### Add modules for e.g Autoplay
```js
<script setup lang='ts'>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
👉 import SwiperCore, { Autoplay } from 'swiper' 
👉 SwiperCore.use([Autoplay])

</script>
```
and use in template
```html
  <swiper
    :slides-per-view="3"
    :space-between="50"
 👉 autoplay 
 👉 delay="2000"
 👉 pause-on-mouse-enter
>
```

Refer Swiperjs api [docs](https://swiperjs.com/swiper-api#param-autoplay-pauseOnMouseEnter)
 for more info on props. 

Ok. 
<span class="animate-pulse">
✨
</span>




