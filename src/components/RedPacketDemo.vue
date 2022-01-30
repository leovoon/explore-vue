<template>
  <Presence>
    <div class="packet max-w-[260px] w-250px max-h-[300px] h-50vh">
      <Motion
        :initial="{ rotateX: 0 }"
        :animate="{ rotateX: opened ? 180 : 0 }"
        :exit="{ rotateX: 0 }"
        :transition="{ duration: 0.5, easing: spring }"
        class="opener"
      ></Motion>
      <div class="hole-wrap">
        <div class="hole"></div>
        <Motion
          class="w-full flex justify-center"
          :initial="{opacity: 0, y: 0}"
          :animate="{opacity: opened ? 1 : 0, y: opened ? 0 : 30}"
          :transition="{ delay: 0.6, duration: 0.5, easing: spring }"
        >
          <span class="text-4xl">
            ✨
          </span>
        </Motion>
      </div>
      <div class="grid place-items-center absolute inset-0 w-full h-full">
        <button class="w-4rem h-4rem rounded-full cursor-pointer ring-yellow-200 ring-3 transform scale-100 focus:outline-none bg-orange-400  hover:bg-orange-300 hover:scale-105 transition-colors" @click="toggle">
          {{ opened ? 'Close' : 'Open' }}
        </button>
      </div>
    </div>
  </Presence>
</template>

<script setup lang='ts'>
import { spring } from 'motion'
import { Motion, Presence } from 'motion/vue'

const opened = ref(false)
const toggle = () => {
  opened.value = !opened.value
}
</script>

<style scoped>
.packet {
  background: red;
  position: relative;
  perspective: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
}

.packet .opener {
  z-index: 2;
  height: 30%;
  background: pink;
  width: inherit;
  border-radius: 0 0 50% 50%;
  position: absolute;
  top: 0;
  transform-style: preserve-3d;
  transform-origin: top;
}

.packet .hole-wrap {
  width: inherit;
  height: 100%;
  position: relative;
  overflow: hidden;
}
.packet .hole-wrap .hole {
  height: 20%;
  background: rgb(231, 20, 20);
  width: inherit;
  border-radius: 0 0 50% 50%;
  position: absolute;
  transform: translateY(-50%);
  top: 0;
}

</style>
