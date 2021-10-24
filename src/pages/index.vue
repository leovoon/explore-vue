<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const name = ref('')
const router = useRouter()
const go = () => {
  if (name.value) router.push(`/hi/${encodeURIComponent(name.value)}`)
}

const { t } = useI18n()


</script>

<template>
  <div>
    <p class="text-4xl">
      <whh-roadsignright class="inline-block" />
    </p>
    <p>vueInFreeTime</p>
    <p>
      <em class="text-sm opacity-75">{{ t('intro.desc') }}</em>
    </p>

    <ul class="flex flex-col list-none my-4 space-y-2">
      <li class="cursor-pointer">
        <router-link class="icon-btn mx-2 space-x-1" to="/playground">
          <akar-icons:arrow-down-right class="inline-block text-sm" />
          <span> Playground </span>
        </router-link>
      </li>
    </ul>

    <ul class="list-none flex flex-col justify-center  items-center">
      #frontend practice
      <li class="cursor-pointer">
        <router-link
          class="icon-btn mx-2 inline-flex items-center space-x-1"
          to="/atm-input"
        >
          <span> Vmoney atm-liked input </span>
        </router-link>
      </li>
      <li class="cursor-pointer">
        <router-link
          class="icon-btn mx-2 inline-flex items-center space-x-1"
          to="/twitter-signup"
        >
          <span> Form validation using Vest </span>
        </router-link>
      </li>
      <li class="cursor-pointer">
        <router-link
          class="icon-btn mx-2 inline-flex items-center space-x-1"
          to="/sort-by-key"
        >
          <span>Practical sort by object key value</span>
        </router-link>
      </li>
      <li class="cursor-pointer">
        <router-link
          class="icon-btn mx-2 inline-flex items-center space-x-1"
          to="/search-by-key"
        >
          <span>Vue-query and vue-useMotion</span>
        </router-link>
      </li>
    </ul>
    <div class="py-4" />

   
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
