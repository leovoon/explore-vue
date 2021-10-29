<template>
  <div class="w-full flex flex-col items-center justify-center">
    <h1>Playgroundd</h1>

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
        <div v-if="!laptop">
          <content-loader
            :width="300"
            :height="300"
            :speed="1"
            class="w-full pt-10 m-2"
            primary-color="#f3f3f3"
            secondary-color="#ecebeb"
          >
            <rect
              x="0"
              y="210"
              rx="5"
              ry="5"
              width="400"
              height="10"
            />
            <rect
              x="0"
              y="0"
              rx="5"
              ry="5"
              width="400"
              height="200"
            />
          </content-loader>
        </div>
        <div v-else class="flex flex-wrap">
          <content-loader
            v-for="loader in 3"
            :key="loader"
            :width="300"
            :height="300"
            :speed="1"
            class="inline-block pt-10 m-2"
            primary-color="#f3f3f3"
            secondary-color="#ecebeb"
          >
            <rect
              x="0"
              y="210"
              rx="5"
              ry="5"
              width="400"
              height="10"
            />
            <rect
              x="0"
              y="0"
              rx="5"
              ry="5"
              width="400"
              height="200"
            />
          </content-loader>
        </div>
      </template>
    </user-list>
  </div>
</template>

<script lang="ts" setup>
import { ContentLoader } from 'vue-content-loader'
import { useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints({
  tablet: 640,
  laptop: 1024,
  desktop: 1280,
})

const laptop = breakpoints.isGreater('tablet')
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
