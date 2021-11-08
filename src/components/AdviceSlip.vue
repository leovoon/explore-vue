<template>
  <div class="dark:text-light-50">
    <h1>Advice slip</h1>

    <div class="relative my-4 border rounded focus-within:border-green-400 flex">
      <input
        id="search"
        v-model="searchTerm"
        type="text"
        placeholder=" "
        autocomplete="off"
        class="px-2 pt-3 rounded dark:bg-gray-600 leading-7 block w-full appearance-none focus:outline-none bg-transparent"
      />
      <label
        for="search"
        class="absolute top-2 left-2 -z-{-1} origin-top-left duration-300 ease-in-out dark:text-white"
      >Search by word</label>
    </div>
    <span class="text-gray-400">e.g love, smile, happy, never, etc.</span>
    <div class="my-4">
      <ul v-if="results" v-motion-slide-bottom :delay="200">
        <span
          v-if="results.total_results"
        >{{ results.total_results > 1 ? "Showing results: " : "Showing result: " }} {{ results.total_results }}</span>
        <div v-if="results.slips">
          <ol
            v-for="slip in results.slips"

            id="valid-result"
            :key="slip.id"
            class="relative flex flex-col"
          >
            <span>{{ slip.advice }}</span>
            <span class="self-end bottom-0 w-max mx-auto text-gray-400">{{ slip.date }}</span>
          </ol>
        </div>
        <ol v-if="results.message">
          {{ results.message.text }}
        </ol>
      </ul>

      <ul v-if="isLoading">
        <div class="flex  justify-center">
          <svg
            width="60"
            height="64"
            viewBox="0 0 140 64"
            xmlns="http://www.w3.org/2000/svg"

            class="fill-green-500 dark:fill-light-100"
          >
            <path
              d="M30.262 57.02L7.195 40.723c-5.84-3.976-7.56-12.06-3.842-18.063 3.715-6 11.467-7.65 17.306-3.68l4.52 3.76 2.6-5.274c3.717-6.002 11.47-7.65 17.305-3.68 5.84 3.97 7.56 12.054 3.842 18.062L34.49 56.118c-.897 1.512-2.793 1.915-4.228.9z"
              fill-opacity="0.5"
            >
              <animate
                attributeName="fill-opacity"
                begin="0s"
                dur="1.4s"
                values="0.5;1;0.5"
                calcMode="linear"
                repeatCount="indefinite"
              />
            </path>
            <path
              d="M105.512 56.12l-14.44-24.272c-3.716-6.008-1.996-14.093 3.843-18.062 5.835-3.97 13.588-2.322 17.306 3.68l2.6 5.274 4.52-3.76c5.84-3.97 13.592-2.32 17.307 3.68 3.718 6.003 1.998 14.088-3.842 18.064L109.74 57.02c-1.434 1.014-3.33.61-4.228-.9z"
              fill-opacity="0.5"
            >
              <animate
                attributeName="fill-opacity"
                begin="0.7s"
                dur="1.4s"
                values="0.5;1;0.5"
                calcMode="linear"
                repeatCount="indefinite"
              />
            </path>
            <path
              d="M67.408 57.834l-23.01-24.98c-5.864-6.15-5.864-16.108 0-22.248 5.86-6.14 15.37-6.14 21.234 0L70 16.168l4.368-5.562c5.863-6.14 15.375-6.14 21.235 0 5.863 6.14 5.863 16.098 0 22.247l-23.007 24.98c-1.43 1.556-3.757 1.556-5.188 0z"
            />
          </svg>
        </div>
      </ul>
      <ul v-if="error">
        <ol id="error">
          {{ error }}
        </ol>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useQuery } from 'vue-query'

const searchTerm = ref<string>('')

const fetcher = async(text: string) => {
  const response = await fetch(`https://api.adviceslip.com/advice/search/${text}`).then(res => res.json())
  return response
}

const enabled = computed(() => !!searchTerm.value)

const { data: results, error, isLoading } = useQuery(
  reactive(['slips', { searchTerm }]), () => fetcher(searchTerm.value), reactive({ enabled }),
)

</script>
  <style scoped>
input:focus-within ~ label,
input:not(:placeholder-shown) ~ label {
  @apply transform scale-75 -translate-y-3;
}

input:focus-within ~ label {
  @apply dark:text-green-300 text-green-800;
}

ol {
  @apply py-8 px-4 bg-green-100 dark:bg-green-600 rounded shadow-md;
}

#valid-result {
  @apply dark:bg-green-700;
}

#no-result {
  @apply dark:bg-green-700;
}

#error {
  @apply dark:bg-red-500 bg-red-300;
}
</style>
