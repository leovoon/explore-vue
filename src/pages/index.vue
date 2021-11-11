<script setup lang="ts">
// import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import lists from './lists.json'
import ListLink from '~/components/ListLink.vue'
// eslint-disable-next-line no-constant-condition

// const name = ref('')
// const router = useRouter()
// const go = () => {
//   if (name.value) router.push(`/hi/${encodeURIComponent(name.value)}`)
// }

const { t } = useI18n()
</script>

<template>
  <div>
    <vue-logo class="vue-logo" />
    <p class="text-4xl">
      <whh-roadsignright class="inline-block" />
    </p>
    <p>vueInFreeTime</p>
    <p>
      <em class="text-sm opacity-75">{{ t("intro.desc") }}</em>
    </p>

    <ul class="flex flex-col list-none my-4 space-y-2">
      <li class="cursor-pointer">
        <router-link class="icon-btn mx-2 space-x-1" to="/playground">
          <akar-icons:arrow-down-right class="inline-block text-sm" />
          <span> Playground </span>
        </router-link>
      </li>
    </ul>
    <ul class="list-none text-left pl-2 space-y-1.2 sm:text-center">
      <span class="pl-2">
        #frontend practice
      </span>
      <list-link v-for="{name, path} in lists" :key="name" :path="`/${path}`">
        {{ name }}
      </list-link>
    </ul>
  </div>
</template>

<style>
.vue-logo {
  @apply fixed scale-120 top-0 right-0 -z-99 opacity-20 transform translate-x-1/4  <sm:translate-y-1/2  overflow-hidden;

}

</style>

<route lang="yaml">
meta:
  layout: home
</route>
