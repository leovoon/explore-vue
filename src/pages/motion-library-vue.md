---
title: Motion library in Vue 3
description: Use vueuse motion to animate components
---

<div class="text-center">
  <carbon-dicom-overlay class="text-4xl -mb-6 m-auto" />
  <h3>Animate Vue component using @vueuse/motion</h3>
  <p>red packet animation</p>
</div>  

## Demo

<red-packet-demo/>

source code at [red-packet-demo.vue](https://github.com/leovoon/explore-vue/blob/main/src/components/RedPacketDemo.vue)


## Install the package
```bash
npm install @vueuse/motion
```


## Import and use as Global plugin
```js
import { MotionPlugin } from '@vueuse/motion'

const app = createApp(App)

app.use(MotionPlugin)

app.mount('#app')
```


Check out their docs at  [@vueuse/motion](https://motion.dev/vue/quick-start) for more info. Another great library is [motion-one](https://motion.dev/guides/quick-start).


Happy lunar new year!
<span class="animate-pulse "> 🎉
</span>