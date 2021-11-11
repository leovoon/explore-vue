---
title: Lazy load components with Suspense in Vue 3
description: defineAsyncComponent() and <script setup>
---

<div class="text-center mb-8">
  <carbon-dicom-overlay class="text-4xl -mb-6 m-auto" />
  <h3>Lazy load components in Vue3 with Suspense</h3> 

</div>

Suspense is an experimental new feature and the API could change at any time. Learn more about it in the [Suspense docs](https://vuejs.org/v2/guide/components-dynamic-async.html#Suspense).

Lazy loading is a technique to speed up the performance of a web page. Instead of loading the entire web page and rendering it to the user in one go as in bulk loading, the concept of lazy loading assists in delaying the loading of components until they are needed.

### Demo

<lazy-load-demo />


Let's get to the point. In this example, the file size of the component is huge.

```js
// BigImage.vue
<template>
  <img :src="BigImage" class="w-full" alt="big image">
</template>

<script lang="ts" setup>
import BigImage from '~/assets/images/big-image.jpg'

// this will render as async setup()
// faking 4 seconds async job to load the image
const getBigImage = await new Promise(resolve => setTimeout(resolve, 4000))


</script>
```

Next, in the parent component, we want to lazy load this component. The way we do this is by using the `defineAsyncComponent()` method.

```js
// Parent.vue
<script lang='ts' setup>
const BigImage = defineAsyncComponent (() => import('./BigImage.vue'))
</script>
```

In the template, we wrap the component with `<Suspense>` and pass the `async` component to it. We can omit the `#fallback` template if we want to show a loading message.

```js
<template>
    <Suspense>
        <template #default>
            <big-image />
        </template>
        <template #fallback>
            <h1>Lazy Loading...</h1>
        </template>
    </Suspense>
</template>
```

The `template #default` is optional. Just a more standard way of doing it.

Look into Devtools under the network tab to see how the component is loaded. 


