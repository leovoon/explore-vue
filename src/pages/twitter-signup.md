---
title: Animate placeholder/label in input field
---

<div class="text-center">
  <!-- You can use Vue components inside markdown -->
  <carbon-dicom-overlay class="text-4xl -mb-6 m-auto" />
  <h3>Form validation using Vest</h3>

</div>
Super easy form validation!

Learn more about [Vest](https://vestjs.dev/#/./getting_started)

<twitter-input/>

```ts
// validation.ts

import { create, test, enforce, only } from "vest";
import { isEmail } from "validator";

enforce.extend({ isEmail });

export default create((data = {}, changedField) => {

  only(changedField);

  test("name", "What's your name?", () => {
    enforce(data.name).isNotBlank()
  })

  test("email", "What is your email?", () => {
    enforce(data.email).isNotBlank()
  });

  test("email", "Please enter a valid email address.", () => {
    enforce(data.email).isEmail()
  });


});
```

More rules <a href="https://vestjs.dev/#/./n4s/rules?id=list-of-enforce-rules">here</a>...

```js
// twitterForm.vue
<script setup lang="ts">
import suite from '~/logic/validation'
import classNames from "vest/classNames";

const state = reactive({ name: '', email: '', res: suite.get() })

const { name, email, res } = toRefs(state)

const classes = computed(() => classNames(res.value, { invalid: "invalid" }))

const validateForm = (field: string) => res.value = suite({ name: name.value, email: email.value }, field)

</script>
```

```html
<template>
  <div class="px-10 py-8 dark:bg-dark-900 rounded-xl">
    <div class="logo w-full flex justify-center items-center ">
     <!-- twitter logo -->
    </div>
    <div class="w-full flex flex-col justify-center items-stretch space-y-8">
      <h4 class="self-start font-bold text-2xl">Create your account</h4>

      <div class="inputWrapperStyle" :class="classes('name')">
        <input
          id="name"
          v-model="name"
          type="text"
          placeholder=" "
          maxlength="50"
          @input="validateForm('name')"
          class="inputStyle"
        />

        <label for="name" class="labelStyle">Name</label>
        <span
          class="absolute top-0 right-2 opacity-0 group-focus-within:opacity-100 text-gray-500"
        >{{ name.length }} / 50</span>
        <span class="absolute text-xs text-red-500">{{ [...res.getErrors('name')][0] }}</span>
      </div>

      <div class="inputWrapperStyle" :class="classes('email')">
        <input
          id="Email"
          v-model="email"
          type="text"
          placeholder=" "
          @input="validateForm('email')"
          class="inputStyle"
        />
        <label for="email" class="labelStyle">Email</label>
        <span class="absolute text-xs text-red-500">{{ [...res.getErrors('email')][0] }}</span>
      </div>
    </div>
    <button
      :disabled="!res.isValid()"
      class="mt-14 w-full rounded-full py-2 text-sm font-semibold text-white bg-light-blue-500"
    >Next</button>
  </div>
</template>
```

```css
<style scoped>
.inputWrapperStyle {
  @apply relative group border dark:border-dark-50 rounded dark:text-gray-500 focus-within:(border-light-blue-500 text-light-blue-500 dark:text-light-blue-500);
}
.inputStyle {
  @apply px-2 pt-6 pb-2 rounded  dark:text-white text-dark-200 leading-6  block w-full appearance-none focus:outline-none bg-transparent;
}

.labelStyle {
  @apply font-thin absolute top-3 text-lg left-2  origin-top-left duration-250 ease-in-out;
}

input:focus-within ~ label,
input:not(:placeholder-shown) ~ label {
  @apply transform scale-75 -translate-y-3;
}

label {
  @apply pointer-events-none;
}

.word-length {
  @apply text-xs absolute;
}

.dob {
  @apply pl-2.5 pt-2.5;
}

select {
  @apply px-2 pt-8 pb-2 border-1 rounded-md text-lg appearance-none;
}

.invalid {
  @apply !border-red-600 dark:!border-red-500 rounded  focus-within:(!border-light-red-500 !text-red-500 dark:!text-red-500);
}

button:disabled,
button[disabled] {
  @apply !bg-gray-500 !text-dark-50;
}
```
