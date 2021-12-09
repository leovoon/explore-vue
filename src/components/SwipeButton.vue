<template>
  <button class="bg-green-600 rounded-full w-full relative">
    <span :style="{opacity, fontSize}" class="absolute text-light-50 font-bold inset-0 text-center grid place-content-center">
      <slot>
        {{ title }}
      </slot>
    </span>
    <div ref="container" class="w-full rounded-full">
      <div ref="el" :style="{left, width, height}" class="border-3 transition-all cursor-pointer  ease-out border-green-600 bg-light-800 shadow-sm text-center relative rounded-full p-2 grid place-content-center">
        <slot name="icon">
          <MdiChevronDoubleRight class="inline-block pointer-events-none text-green-600 text-2xl" />
        </slot>
      </div>
    </div>
  </button>
</template>

<script setup lang='ts'>
import { usePointerSwipe } from '@vueuse/core'
import { ComputedRef } from 'vue-demi'

const props = defineProps({
  thumbWidth: {
    type: String,
    default: '50px',
  },
  thumbHeight: {
    type: String,
    default: '50px',
  },
  title: {
    type: String,
    default: 'Pay RM 1.00',
  },
})

const emit = defineEmits(['onSwipeEnd'])

const el = ref<HTMLElement | null>(null)
const container = ref<HTMLElement | null>(null)
const left = ref('0')
const opacity = ref(1)
const fontSize = ref('100%')
const containerWidth = computed(() => container.value?.offsetWidth)
const elWidth: ComputedRef<number | undefined> = computed(() => el.value?.offsetWidth)
const width = computed(() => props.thumbWidth)
const height = computed(() => props.thumbHeight)

const { distanceX } = usePointerSwipe(el, {
  onSwipe() {
    if (containerWidth.value) {
      if (distanceX.value < 0 && elWidth.value) {
        const distance = Math.abs(distanceX.value)
        left.value = `${distance}px`
        opacity.value = 0.8 - distance / containerWidth.value
        fontSize.value = `${100 - (distance / containerWidth.value * 20)}%`
        // check if element is overflowing the container width, if so, stick to container end
        if (distance + elWidth.value > containerWidth.value)
          left.value = `${containerWidth.value - elWidth.value}px`
      }
      else {
        left.value = '0'
        opacity.value = 1
      }
    }
  },
  onSwipeEnd(e: PointerEvent) {
    if (distanceX.value < 0 && containerWidth.value && (Math.abs(distanceX.value) / containerWidth.value) >= 0.8) {
      if (elWidth.value) left.value = `${containerWidth.value - elWidth.value}px`
      opacity.value = 0
      emit('onSwipeEnd', true)
    }
    else {
      left.value = '0'
      opacity.value = 1
      fontSize.value = '100%'
    }
  },
})
</script>

<style scoped>
* {
  @apply select-none hover:outline-none focus:outline-none outline-transparent;
}
</style>
