---
title: Swipe button component
description: Vue 3 component GrabPay-like swipe to pay component
---

<div class="text-center">
  <!-- You can use Vue components inside markdown -->
  <carbon-dicom-overlay class="text-4xl -mb-6 m-auto" />
  <h3>Swipe-to-pay component using useSwipe</h3>
  <p>implementing GrabPay swipe to pay button</p>
</div>

## Demo
<swipe-button/>

This only works on mobile. For desktop implementation, use [usePointerSwipe](https://vueuse.org/core/usepointerswipe/)

## How to use
Here is an example of how to use the component

```html

<template>
  <p>Pinjam tng-input for demo</p>
  <tng-input input-only @get-amount="inputDisplay" />

  <!-- use here ✨ -->
  <swipe-button @on-swipe-end="handleSwipeEnd">
    Send {{ amount }}
    <template v-if="!isSwipeEnd" #icon>
      <TwemojiLoveLetter />
    </template>
    <template v-else #icon>
      <TwemojiFourLeafClover v-motion-pop />
    </template>
  </swipe-button>

  
</template>

```

```js
<script setup lang='ts'>
const amount = ref('')
const isSwipeEnd = ref(false)
const inputDisplay = (inputAmount: string) => {
  amount.value = inputAmount
}
const handleSwipeEnd = (payload: boolean) => {
  if (payload){
    isSwipeEnd.value = true
    // or do something
  }
}
</script>
```

output of the above code 👇

<swipe-button-demo/>

## Props

| Props   |      Type      |  Optional |
|----------|:-------------:|------:|
| thumbWidth |  String | yes |
| thumbHeight |  String | yes |


| Slot   |      Type      |  Optional |
|----------|:-------------:|------:|
| title |  any | yes |
| icon |  any | yes |

| event   |      Type      |  Optional |
|----------|:-------------:|------:|
| @on-swipe-end |  Boolean | yes |


## Implementation

#### view part
```js
<button class="bg-green-600 rounded-full w-full relative">
    <span :style="{opacity, fontSize}" class="absolute text-light-50 font-bold inset-0 text-center grid place-content-center">
      <slot>
        {{ title }}
      </slot>
    </span>
    <div ref="container" class="w-full rounded-full">
      <div ref="el" :style="{left, width, height}" >
        <slot name="icon">
         // icon
        </slot>
      </div>
    </div>
  </button>
```

#### logic 

thanks to [useSwipe](https://vueuse.org/core/useswipe/)

```js
<script setup lang='ts'>
import { useSwipe } from '@vueuse/core'
import { ComputedRef } from 'vue-demi'

const props = defineProps({...})

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


const { lengthX: distanceX } = usePointerSwipe(el, {
  onSwipe() {
    if (containerWidth.value) {
      if (distanceX.value < 0 && elWidth.value) {
        const distance = Math.abs(distanceX.value)
        left.value = `${distance}px`
        opacity.value = 0.8 - distance / containerWidth.value
        fontSize.value = `${100 - (distance / containerWidth.value * 20)}%`
        // check if element is overflowing the container width
        // if yes, stick to container end
        if (distance + elWidth.value > containerWidth.value)
          left.value = `${containerWidth.value - elWidth.value}px`
      }
      else {
        left.value = '0'
        opacity.value = 1
      }
    }
  },
  onSwipeEnd() {
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
```

Happy Vue-ing! 🎇