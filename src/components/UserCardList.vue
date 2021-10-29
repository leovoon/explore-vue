<template>
  <ul class="userlist">
    <li v-for="item in props.list" :key="item.id">
      <slot name="listitem" :user="item">
        <div class="card">
          <slot name="noPicture">
            <img
              v-motion-pop
              :delay="200"
              class="responsive"
              :src="item.avatar_url"
              :alt="item.login"
            />
          </slot>

          <slot name="picture-only">
            <div v-motion-slide-top class="card-body" :delay="200">
              <slot name="loginOnly" :item="item.login"></slot>
              <slot name="loginAndType" :item="`${item.type}: ${item.login}  ` "></slot>
              <slot name="loginId" :item="item.id"></slot>
            </div>
          </slot>
        </div>
      </slot>
    </li>
  </ul>
</template>

<script setup lang='ts'>
// eslint-disable-next-line import/named
import { PropType } from 'vue'

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
const props = defineProps({
  list: {
    type: Array as PropType<User[] | null>,
    required: true,
  },
})
</script>

<style scoped>
.userlist {
  display: grid;
  gap: 1rem;
  padding: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
  @apply <sm:grid-cols-2
}
.responsive {
  width: 100%;
}
.card {
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  overflow: hidden;
  @apply hover:(transform translate-y-2 -scale-98 transition-transform ease-in-out duration-250 cursor-pointer)
}
.card-body {
  padding: 1rem;
}
</style>
