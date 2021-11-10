---
title: reusable tabs component
description: dynamic component with script setup
---
<div class="text-center">
  <carbon-dicom-overlay class="text-4xl -mb-6 m-auto" />
  <h3>Tabs component</h3>
  <p>Dynamic component *script setup*</p>
</div>

<tab-demo/>

### the code..

```js
// Tabs.vue
<script lang='ts' setup>
import Tab1 from './Tab1.vue'
import Tab2 from './Tab2.vue'

const currentActive = ref<Object | null>(null)
const isActive = (tab: Object) => currentActive.value === tab ? 'isActive' : null
const changeTab = (tab: Object) => {
  currentActive.value = markRaw(tab)
  // performance wise, use markRaw
}

changeTab(Tab1) // initial active Tab

</script>
```

```js
<template>
  <button :class="isActive(Tab1)" @click="changeTab(Tab1)">
    Pinia
  </button>
  <button :class="isActive(Tab2)" @click="changeTab(Tab2)">
    Vuex
  </button>
  <div class="content">
    <component
      :is="currentActive"
      v-motion-fade
    ></component>
  </div>
</template>
```


