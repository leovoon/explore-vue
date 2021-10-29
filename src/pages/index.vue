<script setup lang="ts">
// import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
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

    <ul class="list-none flex flex-col justify-center items-center">
      #frontend practice
      <list-link path="/atm-input">
        vmoney atm-liked input
      </list-link>
      <list-link path="/twitter-signup">
        Form validation using Vest Part 1
      </list-link>
      <list-link path="/w3school-signup">
        Form validation using Vest Part 2
      </list-link>
      <list-link path="/sort-by-key">
        Practical sorting by object key value
      </list-link>
      <list-link path="/search-by-key">
        vue-query and vueuse-motion
      </list-link>
      <list-link path="/reusable-components">
        Making reusable-components using Slot
      </list-link>
    </ul>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
