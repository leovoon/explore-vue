---
title: Parallax effect card
description: Create parallax effect with useParallax
---

<div class="text-center">
  <carbon-dicom-overlay class="text-4xl -mb-6 m-auto" />
  <h3>Create parallax effect easily</h3>
  <p>useParallax</p>
</div>  

effect inspired by [blackmagic.so](https://blackmagic.so/)

<parallax-effect-demo/>


## view
```html
 <div ref="container">
    <div :style="cardStyle"></div>
 </div>
```

## logic
```javascript
<script setup lang='ts'>
import { useParallax } from '@vueuse/core'

const container = ref<HTMLDivElement | null>(null)
const { tilt, roll, source } = useParallax(container)
const cardStyle = computed(() => ({
  border: '1px solid #cdcdcd',
  boxShadow: '0 0 20px 0 rgba(255, 255, 255, 0.25)',
  transform: `rotateX(${roll.value * 40}deg) 
              rotateY(${tilt.value * 40}deg)`,
}))
</script>

```

<span class="animate-pulse text-xl">
✨
</span>