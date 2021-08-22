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
          <span> TnG transfer </span>
        </router-link>
      </li>
      <li class="cursor-pointer">
        <router-link
          class="icon-btn mx-2 inline-flex items-center space-x-1"
          to="/twitter-signup"
        >
          <span> Twitter Sign Up </span>
        </router-link>
      </li>
      <li class="cursor-pointer">
        <router-link
          class="icon-btn mx-2 inline-flex items-center space-x-1"
          to="/sort-by-key"
        >
          <span>Sorting by key</span>
        </router-link>
      </li>
      <li class="cursor-pointer">
        <router-link
          class="icon-btn mx-2 inline-flex items-center space-x-1"
          to="/search-by-key"
        >
          <span>Advice Slip</span>
        </router-link>
      </li>
    </ul>
    <div class="py-4" />

    <input
      id="input"
      v-model="name"
      :placeholder="t('intro.whats-your-name')"
      :aria-label="t('intro.whats-your-name')"
      type="text"
      autocomplete="false"
      class="px-4 py-2 w-[250px] text-center bg-transparent border rounded border-gray-200 dark:border-gray-700 "

      @keydown.enter="go"
    />
    <label class="hidden" for="input">{{ t('intro.whats-your-name') }}</label>

    <div>
      <button class="m-3 text-sm btn" :disabled="!name" @click="go">
        {{ t('button.go') }}
      </button>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
