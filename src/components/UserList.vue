<template>
  <div class="py-4">
    (scoped slot: sending props from child to parent)
    <slot v-if="!isFetching" name="userlist" :list="data">
      <ul>
        <li v-for="d in data.slice(2)" :key="d.id">
          <img width="30" height="30" class="rounded-full" :src="d.avatar_url" :alt="d.login">
          <img v-if="d.avatar_url" :src="d.avatar.url" />
          <img v-else class="fallback-img" width="30" height="30" />

          <div class="flex flex-col items-start">
            <span class="ml-2">{{ d.login }}</span>
            {{ props.secondRow(d) }}
          </div>
        </li>
      </ul>
    </slot>

    <slot v-if="error" name="error">
      {{ error }}
    </slot>
    <slot v-if="isFetching" name="loading">
      Loading...
    </slot>
  </div>
</template>

<script setup lang='ts'>
import { useFetch } from '@vueuse/core'
// eslint-disable-next-line import/named

const url = 'https://api.github.com/users'

const { data, isFetching, error } = useFetch(url, { refetch: false }).get().json()

const props = defineProps({
  secondRow: {
    type: Function,
    default: () => {},
  },
})

</script>

<style scoped>
li {
    @apply inline-flex items-center justify-center px-2 text-sm font-semibold;
}
</style>
