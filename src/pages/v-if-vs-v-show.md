---
title: Difference between v-if and v-show
description: why are they different and when to use them?
---

<div class="text-center">
  <!-- You can use Vue components inside markdown -->
  <carbon-dicom-overlay class="text-4xl -mb-6 m-auto" />
  <h3>v-if vs v-show</h3>
  <p>Why are they different and when to use them?</p>
</div>

## v-if
- event listeners and child components inside the conditional block are destroyed and re-created during toggles.
- can group on `<template>`. The rendered result will not include the `<template>` element.

```html
<template v-if="isShow">
  <div>
    <p>Hello</p>
  </div>
  <button>
      Say Hi
  </button>
</template>
```

- can use together `v-else-if` and `v-else`

## v-show
- always rendered and remains in the DOM regardless of initial condition
- only toggles the display CSS property of the element.
- does not support `template` and `v-else`

```html
<template>
    <h1 v-show="isShow">
        Hello world
    </h1>
</template>

```

### In short
Use `v-show` if you need to toggle something very often. 
Use `v-if` if you need to toggle something more conditionally.


Happy Vue-ing! 🎇