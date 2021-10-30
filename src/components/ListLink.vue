<template>
  <li class="cursor-pointer block group">
    <router-link
      class="icon-btn mx-2 inline-flex items-center space-x-1 visited:(text-green-900 dark:text-green-300)"
      :to="path"
    >
      <slot>
        <span> {{ title }} </span>
      </slot>
    </router-link>
  </li>
</template>

<script setup lang='ts'>
const props = defineProps(['title', 'path'])
const { title, path } = props
</script>

<style scoped>

</style>
