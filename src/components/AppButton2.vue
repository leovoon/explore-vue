<template>
  <button>
    <slot name="icon">
      <akar-icons:heart class="inline-block" />
    </slot>
    <slot name="default">
      {{ text }}
    </slot>
  </button>
</template>

<script lang='ts' setup>
const props = defineProps(['text'])

const { text } = props
</script>

<style scoped>
button {
    @apply inline-flex gap-1 text-xs min-w-max bg-green-200 text-gray-600 dark:(bg-green-800 text-gray-200) rounded-xl px-2 py-1 shadow-black shadow-md;
}
</style>
