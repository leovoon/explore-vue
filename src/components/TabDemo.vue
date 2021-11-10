
<template>
  <button :class="isActive(Tab1)" @click="changeTab(Tab1)">
    Pinia
  </button>
  <button :class="isActive(Tab2)" @click="changeTab(Tab2)">
    Vuex
  </button>
  <div class="content">
    <component
      :is="currentActive"
      v-motion-fade
    ></component>
  </div>
</template>

<script lang='ts' setup>
import Tab1 from './Tab1.vue'
import Tab2 from './Tab2.vue'

const currentActive = ref<Object | null>(null)
const isActive = (tab: Object) => currentActive.value === tab ? 'isActive' : null
const changeTab = (tab: Object) => {
  currentActive.value = markRaw(tab)
  // performance wise, use markRaw
}

changeTab(Tab1) // initial active Tab

</script>

<style scoped>
button:focus {
  outline: none;
}
button {
  @apply shadow-sm cursor-pointer border border-b-0 px-1 dark:(border-0) py-0.5 border-gray-50
}

.isActive {
  @apply bg-green-300 dark:(bg-green-700 border-0)
}
.content {
  @apply shadow-md py-1 px-2 border-t-1 border-t-green-300 dark:border-t-1 dark:border-t-green-600
}
</style>
