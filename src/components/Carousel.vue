<template>
  <swiper
    :slides-per-view="3"
    :space-between="50"
    autoplay
    delay="2000"
    pause-on-mouse-enter
  >
    <swiper-slide
      v-for="slide in 4"
      :key="slide"
      class="border p-2"
    >
      <div class="w-20 border border-green-300 h-20">
        slide element {{ slide }}
      </div>
    </swiper-slide>
  </swiper>
</template>

<script setup lang='ts'>
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
SwiperCore.use([Autoplay])
</script>

<style scoped>

</style>
