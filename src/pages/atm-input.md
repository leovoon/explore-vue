---
title: ATM Like Input
---

<div class="text-center">
  <!-- You can use Vue components inside markdown -->
  <carbon-dicom-overlay class="text-4xl -mb-6 m-auto" />
  <h3>ATM Like Input</h3>
</div>

ui inspired by tng.

<tng-input/>

 mask currency easily by using [v-money](https://www.npmjs.com/package/v-money3/v/3.2.1).

```js
<template>
  <div class="space-y-8 p-4">
    <div class="inputWrapper">
      <label>Enter your preferred amount</label>
      <input
        v-model="amountShow"
        v-money="config"
        type="text"
        inputmode="numeric"
        maxlength="20"
      />
    </div>
    <span>Min reload amount is RM 10</span>
  </div>
</template>
```


```js
<script lang="ts" setup>
import { VMoney3 as vMoney } from 'v-money3'

const amountShow = ref()
const config = ref({
  decimal: '.',
  thousands: ',',
  prefix: 'RM ',
  precision: 2,
  masked: false,
  disableNegative: true,
})
</script>
```

```html
<style scoped>
*, *:hover, *:focus {
  @apply outline-transparent;

}

.inputWrapper {
  @apply text-lg relative w-full;
}

.inputWrapper input {
  @apply border-b  bg-gray-100 w-full px-3 pt-6 pb-2 dark:(text-light-700 bg-dark-50);
}

.inputWrapper label {
  @apply text-xs absolute inset-1 pointer-events-none left-2 text-blue-600 dark:text-blue-300;
}

span{
  @apply w-full text-gray-500 text-xs;
}

</style>
```