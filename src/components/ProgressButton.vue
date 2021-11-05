<template>
  <button :class="selected ? 'selectedStyle' : 'default'" @click="$emit('select')">
    <progress class="selectedStyle" max="100" :value="[selected ? val : '0']">
    </progress>
    <span class="text">{{ text }}</span>
    <span v-show="selected" class="percentage"> {{ val ? parseFloat(val) >= 100 ? '100' : val : '0' }} %</span>
  </button>
</template>

<script setup lang='ts'>
defineProps({
  text: {
    type: String,
    default: 'vote me',
  },
  val: {
    type: String,
    default: '0',
  },
  selected: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['select'])

</script>

<style scoped>

button, button.default {
@apply p-[0.8px] focus:outline-transparent hover:outline-transparent min-w-60 h-7 min-h-7 flex relative border-gray-300 border-[0.5px]
}

button.selectedStyle {
@apply dark:text-blue-300 dark:border-blue-400 text-blue-400
}

progress[value]::-webkit-progress-bar {
@apply bg-opacity-1 bg-gray-500
}

progress[value]::-webkit-progress-value {
@apply dark:bg-blue-500  dark:bg-opacity-30 bg-blue-600
}

progress {
@apply min-h-full min-w-full;
}

span {
  @apply text-xs transform -translate-y-1/2 top-1/2 absolute min-h-full flex items-center px-2 justify-end  w-full
}

span.text {
  @apply justify-start;
}

span.text {
  @apply justify-start;
}
</style>
