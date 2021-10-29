<template>
  <div class="py-4">
    (scoped slot: sending props from child to parent)
    <slot v-if="!isFetching" name="userlist" :list="data">
      <ul>
        <li v-for="d in data" :key="d.id">
          <img width="48" height="48" class="rounded-full" :src="d.avatar_url" :alt="d.login">
          <div class="flex flex-col items-start">
            <span class="ml-2">{{ d.login }}</span>
            {{ props.secondRow(d) }}
          </div>
        </li>
      </ul>
    </slot>
    <slot v-else-if="error" name="error">
      {{ error }}
    </slot>
    <slot v-else name="loading">
      <div class="loader">
        Loading...
      </div>
    </slot>
  </div>
</template>

<script setup lang='ts'>
import { useFetch } from '@vueuse/core'

const url = 'https://api.github.com/users'

interface User {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
}

const { data , isFetching, error } = useFetch(url).get().json()

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
