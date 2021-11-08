<template>
  <main class="-sm:m-auto px-4 py-10 text-center text-gray-700 dark:text-gray-200">
    <button
      class=" fixed top-0 right-0 p-5 icon-btn mx-2 !outline-none"
      @click="toggleDark()"
    >
      <carbon-moon v-if="isDark" />
      <carbon-sun v-else />
    </button>

    <router-view />
    <Footer />
    <div class="mt-5 mx-auto text-center opacity-25 text-sm">
      <p>
        Made with <span class="heart">
          ❤
        </span>
        by leovoon
      </p>
    </div>
  </main>
</template>

<script setup lang='ts'>
import { isDark, toggleDark } from '~/logic'
</script>
