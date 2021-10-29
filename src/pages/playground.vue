<template>
  <div class="w-full flex flex-col items-center justify-center">
    <h1>Playground</h1>

    <select v-model="selected">
      <option v-for="option in options" :key="option.mode" :value="option.mode">
        Showing {{ option.label }}
      </option>
    </select>
    <div class="space-x-4">
      <label for="picture">Show Picture?</label>
      <input v-model="checked" name="picture" type="checkbox">
      <span>{{ checked }}</span>
    </div>

    <user-list>
      <template #userlist="{list}">
        <user-card-list :list="list">
          <template #[checkShowPicture]>
            {{ }}
          </template>
          <template #[selected]="{item}">
            {{ item }}
          </template>
        </user-card-list>
      </template>
      <template #loading>
        <div class="mt-10">
          <content-loader
            :width="windowWidth"
            :height="300"
            :speed="1"
            class=""
            :primary-color=" isDark ? '#4e586d' : '#f3f3f3'"
            :secondary-color="isDark ? '#2e3440' : '#ecebeb'"
          >
            <rect
              x="20"
              y="0"
              rx="0"
              ry="0"
              width="170"
              height="180"
            />
            <rect
              x="22"
              y="200"
              rx="0"
              ry="0"
              width="86"
              height="15"
            />
            <rect
              x="220"
              y="0"
              rx="0"
              ry="0"
              width="170"
              height="180"
            />
            <rect
              x="222"
              y="200"
              rx="0"
              ry="0"
              width="86"
              height="15"
            />
          </content-loader>
        </div>
      </template>
    </user-list>
  </div>
</template>

<script lang="ts" setup>
import { ContentLoader } from 'vue-content-loader'
import { useDark, useWindowSize } from '@vueuse/core'

const isDark = useDark()
const { width: windowWidth } = useWindowSize()
const selected = ref('loginOnly')
const checked = ref(true)
const checkShowPicture = computed(() => !checked.value ? 'noPicture' : '')
const options = [
  { mode: 'loginOnly', label: 'Username only' }, { mode: 'loginAndType', label: 'User type + Username' }, { mode: 'loginId', label: 'User Id only' }]
</script>

<route lang="yaml">
meta:
  layout: default
</route>

<style scoped>
select {
  @apply min-w-max rounded-full m-4 px-4 py-1 border appearance-none dark:bg-green-700
}

</style>
