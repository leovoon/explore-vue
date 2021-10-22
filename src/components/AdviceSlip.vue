<template>
  <div class="dark:text-light-50">
    <h1>Advice slip</h1>

    <div class="relative my-4 border rounded focus-within:border-green-400 flex">
      <input
        id="search"
        v-model="searchTerm"
        type="text"
        placeholder=" "
        class="px-2 pt-3 rounded dark:bg-gray-600 leading-7 block w-full appearance-none focus:outline-none bg-transparent"
      />
      <label
        for="search"
        class="absolute top-2 left-2 -z-{-1} origin-top-left duration-300 ease-in-out dark:text-white"
      >Search by word</label>
    </div>
    <span class="text-gray-400">e.g love, smile, happy, never, etc.</span>
    <div class="my-4">
      <ul v-if="results">
        <span
          v-if="results.total_results"
        >{{ results.total_results > 1 ? "Showing results: " : "Showing result: " }} {{ results.total_results }}</span>
        <ol
          v-if="results.slips"
          v-for="slip in results.slips"
          id="valid-result"
          class="relative flex flex-col"
          :key="slip.id"
        >
          <span>{{ slip.advice }}</span>
          <span class="self-end bottom-0 w-max mx-auto text-gray-400">{{ slip.date }}</span>
        </ol>
        <ol v-if="results.message">{{ results.message.text }}</ol>
      </ul>

      <ul v-if="isLoading">
        <ol class="flex justify-center">
          <img src="hearts.svg" width="60" alt="loading svg" />
        </ol>
      </ul>
      <ul v-if="error">
        <ol v-if="error" id="error">{{ error }}</ol>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useQuery } from 'vue-query'

const searchTerm = ref<string>('')

const fetcher = async (text: string) => {
  const response = await fetch("https://api.adviceslip.com/advice/search/" + text).then(res => res.json())
  return response
}

const enabled = computed(() => !!searchTerm.value);

const { isIdle, data: results, error, isLoading } = useQuery(
  reactive(["slips", { searchTerm }]), () => fetcher(searchTerm.value), reactive({ enabled })
);


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
