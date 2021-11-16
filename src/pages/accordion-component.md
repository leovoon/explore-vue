---
title: Vue 3 simple accordion component 
---

<div class="text-center">
  <carbon-dicom-overlay class="text-4xl -mb-6 m-auto" />
  <h3>Simple accordion component</h3>
  <p>Vue 3 accordion implementation</p>
</div>

## Demo
<div class="py-4">
<accordion-demo />
</div>



```html
<template>
  <accordion title="Cool title">
    some cool content
  </accordion>

  <accordion title="Cool title" animation="bottomToTop">
    open with animation
  </accordion>

  <accordion title="Open me">
    <accordion title="Open me">
      <accordion title="Open me">
        <accordion title="Open me">
          ❤️
        </accordion>
      </accordion>
    </accordion>
  </accordion>
</template>

```


| Props   |      Type      |  Optional |
|----------|:-------------:|------:|
| title |  String | yes |
| animation |   "bottomToTop" |  yes |
| slot |    any  |   yes |

```js
// Accordion.vue
<template>
  <div class="Accordion">
    <div
      class="Accordion__trigger"
      :class="isOpen ? 'active':'beforeBorder'"
      @click="isOpen = !isOpen"
    >
      <carbon-chevron-down v-if="!isOpen" class="text-xl mx-2" />
      <carbon-chevron-up v-if="isOpen" class="text-xl mx-2" />
      {{ title }}
    </div>
    <transition :name="animation">
      <div v-show="isOpen" class="Accordion__body">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
```

```js
<script setup lang='ts'>
const isOpen = ref(false)
defineProps({
  title: {
    type: String,
    default: 'title',
  },
  animation: {
    type: String,
    require: false,
  },
})
</script>
```
```js
<style scoped>
.beforeBorder {
    @apply relative;
}
.beforeBorder:before {
@apply absolute border-b-px w-full left-0 -bottom-px border-b-current;
transition: opacity 0.1s linear, transform 0.5s ease-in-out;
content: '';
}
.beforeBorder:not(:hover)::before {
  @apply opacity-0 transform scale-x-0;
}

.Accordion__trigger {
  @apply flex justify-start items-center border-b px-2 py-3 dark:border-b-gray-600 cursor-pointer;
}
.Accordion__trigger:hover {
  @apply text-green-600 dark:(text-green-300)
}
.Accordion__trigger.active {
  @apply border-b-green-600;
}

.Accordion__body {
  @apply dark:(bg-gray-600 bg-opacity-20) px-6 py-3  bg-opacity-30 bg-green-200
}

.bottomToTop-enter-active {
  animation: bottomToTop 0.35s forwards;
}

@keyframes bottomToTop {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
```