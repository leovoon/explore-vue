---
title: before after slider Vue 3 component
---

<div class="text-center">
  <!-- You can use Vue components inside markdown -->
  <carbon-dicom-overlay class="text-4xl -mb-6 m-auto" />
  <h3>The making of before-after slider Vue 3 component</h3>
  <p>experimenting Vue3 new feature - CSS reactive binding <br>
  ... so much fun!</p>
  

</div>


<before-after-slider-demo/>

random image from [loremspace](https://lorem.space)


### How to Use
```html
<template>
 <before-after-slider
      img-src-before="url"
      img-src-after="url"
      thumb-height="250px"
      thumb-width="5px"
      thumb-color="#ffffff"
      center-thumb
      labelled
    />
</template>
```

| Props   |      Type      |  Optional | 
|----------|:-------------:|:------:|
| img-src-before |  url: String | yes |
| img-src-before |   url: String |  yes |
| thumb-height |    px: String  |   yes |
| thumb-width |    px: String  |   yes |
| thumb-color |    Hex  |   yes |
|  center-thumb  |    Boolean  |   yes |
|  labelled  |    Boolean  |   yes |




### Code

```js
// BeforeAfterSlider.vue
<template>
<div
    class="relative min-w-[250px] min-h-[250px] group"
    @click="handleMobileTouch()"
  >
    <div
      class="img "
      :style="{ backgroundImage: `url(${imgSrcAfter})` }"
    ></div>
    <!-- fake effect -->
    <div
      class="img foreground-img  filter grayscale-80"
      :style="{ backgroundImage: `url(${imgSrcBefore})` }"
    ></div>
    <input
      ref="sliderThumb"
      v-model="rangeValue"
      type="range"
      min="0"
      max="100"
      class="slider appearance-none bg-transparent group-hover:opacity-75 opacity-0 absolute inset-0 h-full w-full transition ease-in-out"
      @touchstart="handleMobileTouch()"
      @touchend="handleMobileLeave()"
      @blur="handleMobileLeave()"
    >
    <span v-show="labelled" class="absolute inset-0">Before</span>
    <span v-show="labelled" class="absolute right-0">After</span>

    <emojione:left-right-arrow
      v-show="centerThumb"
      ref="sliderCenterThumb"
      class="center-thumb inline-block absolute transform origin-center -translate-x-1/2 -translate-y-1/2 inset-1/2 w-8 h-8
       pointer-events-none transition ease opacity-0 group-hover:opacity-100"
    />
  </div>
</template>
```
```js
<script setup lang='ts'>
defineProps({
  imgSrcBefore: {
    type: String,
    default: 'https://api.lorem.space/image/movie?w=250&h=250',
  },
  imgSrcAfter: {
    type: String,
    default: 'https://api.lorem.space/image/movie?w=250&h=250',
  },
  thumbHeight: {
    type: String,
    default: '150px',
    validator: (value: string) => /^\d+px$/.test(value),
  },
  thumbWidth: {
    type: String,
    default: '1px',
    validator: (value: string) => /^\d+px$/.test(value),
  },
  thumbColor: {
    type: String,
    default: '#fffff',
    validator: (value: string) => /^#[0-9a-f]{6}$/.test(value),
  },
  labelled: {
    type: Boolean,
    default: false,
    required: false,
  },
  centerThumb: {
    type: Boolean,
    default: false,
    required: false,
  },
})

// more props, endless possibilities

const rangeValue = ref<string>('50')
const sliderThumb = ref<HTMLElement | null>(null)
const sliderCenterThumb = ref<HTMLElement | null>(null)
const foregroundWidth = computed(() => {
  const range = rangeValue.value
  return `${range}%`
})

// mobile touch support instead of hover
const handleMobileTouch = () => {
  if (sliderThumb.value) {
    sliderThumb.value.classList.remove('opacity-0')
    sliderThumb.value.classList.add('opacity-75')
  }
}
const handleMobileLeave = () => {
  if (sliderThumb.value) {
    sliderThumb.value.classList.add('opacity-0')
    sliderThumb.value.classList.remove('opacity-75')
  }
}

</script>
```

### Styling
here comes `v-bind` so magic
```js
<style scoped>
.img {
@apply absolute inset-0 w-full h-full background-cover;
}

.foreground-img {
    width: v-bind(foregroundWidth);
}

.slider::-moz-range-thumb  {
    @apply appearance-none cursor-pointer;
    height: v-bind(thumbHeight);
    width: v-bind(thumbWidth);

}

.slider::-webkit-slider-thumb {
    @apply appearance-none cursor-pointer ;
    height: v-bind(thumbHeight);
    width: v-bind(thumbWidth);
    background-color: v-bind(thumbColor);
}

span {
    @apply p-1 text-black text-white w-min
    h-min text-xs bg-opacity-40 bg-light-600;
}

.center-thumb {
    left: v-bind(foregroundWidth);
}
```
