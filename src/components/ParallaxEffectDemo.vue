<template>
  <div class="rounded max-w-xs ">
    tilt:  {{ tilt }} <br>
    roll: {{ roll }} <br>
    source: {{ source }}
  </div>

  <div class="grid place-content-center mt-8">
    <div ref="container">
      <div
        :style="cardStyle"
        class=" bg-gradient-7 transition-all scale-100
                duration-[0.15s] animate-ease-[cubic-bezier(.4,0,.2,1)]
                rounded-lg w-15rem h-20rem"
      >
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { useParallax } from '@vueuse/core'

const container = ref<HTMLDivElement | null>(null)
const { tilt, roll, source } = useParallax(container)
const cardStyle = computed(() => ({
  border: '1px solid #cdcdcd',
  boxShadow: '0 0 20px 0 rgba(255, 255, 255, 0.25)',
  transform: `rotateX(${roll.value * 40}deg) rotateY(${tilt.value * 40}deg)`,

}))
</script>
