---
title: Motion library in Vue 3
description: Use motion one to animate components
---

<div class="text-center">
  <carbon-dicom-overlay class="text-4xl -mb-6 m-auto" />
  <h3>Animate Vue component using Motion One</h3>
  <p>red packet animation</p>
</div>  

## Demo

<red-packet-demo/>

code at [red-packet-demo.vue](https://github.com/leovoon/explore-vue/blob/main/src/components/RedPacketDemo.vue)


## Install the package
```bash
npm install motion
```


## Import and use as Component
```js
// as Motion component
import { Motion } from "motion/vue" 
```

```html
<template>
<Motion> content to animate </Motion>
</template>
```


## Animate via selector
```js
import { animate } from "motion"

// Animate via selector
animate(".red-packet", { rotateX: 180 }, { duration: 0.5 })
```

## Animate via array of elements
```js
const boxes = document.querySelectorAll(".box") // array of elements
animate(boxes, { opacity: 0 }, { easing: "ease-out" })
```

check out their docs at  [motion-one](https://motion.dev/vue/quick-start) for more info.


Happy lunar new year!
<span class="animate-pulse "> 🎉
</span>