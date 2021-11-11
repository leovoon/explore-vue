<template>
  <div>
    <suspense>
      <big-image />
      <template #fallback>
        <div class="fallback mx-auto">
          <h1>Lazy Loading...</h1>
        </div>
      </template>
    </suspense>
  </div>
</template>

<script lang='ts' setup>
const BigImage = defineAsyncComponent (() => import('./BigImage.vue'))
</script>
