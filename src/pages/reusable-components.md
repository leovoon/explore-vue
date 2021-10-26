---
title: Making reusable components using Vue Slot
---

<div class="text-center mb-8">
  <!-- You can use Vue components inside markdown -->
  <carbon-dicom-overlay class="text-4xl -mb-6 m-auto" />
  <h3>Making reusable components using Vue Slot</h3> 

</div>


Here are two reusable button components created using different types of slot methods. 

The first one is a simple button. Just wrap the props from the parent component and pass them to the default slot called `<slot></slot>` in the child component.

<div class="w-full text-center">
<app-button>Cool Button</app-button>
</div>

```js
// AppButton.vue
<template>
    <button>
        <slot>{{ text }}</slot>
    </button>
</template>

<script lang='ts' setup>
  const props = defineProps(['text']);
  const { text } = props
</script>
```


```html
<!-- Parent.vue -->
<app-button>Cool button</app-button>
```

Secondly is **named slot**. We specify the name of multiple slots in child component, pass content from parent component based on the slot name set. In this example we set a fallback content of icon in slot named `icon`.
<div class="w-full text-center">
<app-button2>
  second button
</app-button2>
</div>


```html
<!-- AppButton2 -->
<template>
    <button>
        <slot name="icon"> <akar-icons:heart class="inline-block" /> </slot>
        <slot name="default">{{ text }}</slot>
    </button>
</template>
```

 
```html
<!-- Parent.vue -->
<app-button2>  second button </app-button2>
```

For each slot we wrap it in `template` following by `v-slot:name` **or** we can use shorthand #name. We may or not emit a `default` slot based on your preferences.

```html
<!-- Parent.vue -->

<app-button2>
  <template v-slot:icon> 😊 </template>
  text passed to default slot
</app-button2>

<!-- shorthand -->
<app-button2>
  <template #icon>😊</template>
  <template #default>text passed to default slot</template>
</app-button2>
```

and they will look exactly the same like  <app-button2><template v-slot:icon> 😊 </template> text passed to default slot </app-button2>

That's all! 