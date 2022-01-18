---
title: Get Date, Time and Timestamp Example in Vue
description: How to get current date, time and timestamp in Vue
---

<div class="text-center">
  <!-- You can use Vue components inside markdown -->
  <carbon-dicom-overlay class="text-4xl -mb-6 m-auto" />
  <h3>Date, Time and Timestamp in Vue</h3>
  <p>How to get current date, time and timestamp</p>
</div>


In the examples below, we write it in the ``template``. It's up to you to wrap it in functions to making it reusable.

```html
<template>
{{ your js here }}
</template>
```

### Get current full date
get full date time with timezone
```js
new Date()
```


### Get current time or timestamp ```number```
```js
Date.now() 

new Date().getTime()
```

### Get current date in a dd/mm/yyyy
```js
new Date().toLocaleDateString()
```

### Get current date in a dd/mm/yyyy hh:mm:ss
```js
new Date().toLocaleString()
```

### Get current time in 12 hour format
```js
new Date().toLocaleTimeString('en-US', { hour12: true })
```

these are some common time formats that can be used, it's basically JavaScript, check out [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString) page for more. 



### Reactive timestamp
To get a reactive timestamp, you can use ``useTimestamp`` from vueuse. Check out the [docs](https://vueuse.org/core/usetimestamp/#usage) to learn more about the usage.

<dates-demo/>

```html
<template>
{{ timestamp }} <br>
{{ formattedTimestamp }}
</template>
```

```js
<script setup lang='ts'>
import { useTimestamp } from '@vueuse/core'

const timestamp = useTimestamp() 

// do any other logic with computed property
const formattedTimestamp = computed(() => {
  const date = new Date(timestamp.value)
  return date.toLocaleString()
})

</script>
```

Happy coding! <span class="animate-pulse">💖</span>