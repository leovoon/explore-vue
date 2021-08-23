<template>
  <div class="dark:text-light-50">
    <h1>Advice slip</h1>

    <div
      class="relative my-4
      border rounded focus-within:border-green-400 "
    >
      <input
        id="search"
        v-model="searchTerm"
        type="text"
        placeholder=" "
        class="px-2 pt-3 rounded dark:bg-gray-600 leading-7  block w-full appearance-none focus:outline-none bg-transparent"
        @keyup.enter="callSearch"
        @blur="callSearch"
      >
      <label for="search" class=" absolute top-2 left-2 -z-{-1} origin-top-left duration-300 ease-in-out">Search by word</label>
    </div>
    <span class="text-gray-400">

      e.g love, smile, happy, never, etc.
    </span>

    <div class="my-4">
      <ul v-if="!notice">
        <ol v-for="slip in slips" id="valid-result" :key="slip.id">
          {{ slip.advice }}
        </ol>
      </ul>

      <ul v-else>
        <ol v-if="notice" id="no-result">
          {{ notice }}
        </ol>
        <ol v-if="error" id="error">
          {{ error }}
        </ol>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">

interface slips {
  advice: string
  date: string
  id: number
}

export default {

  setup() {
    const searchTerm = ref('')
    const slips = ref<slips[]>([])
    const notice = ref(null)
    const error = ref(null)

    const callSearch = async() => {
      await fetch(`https://api.adviceslip.com/advice/search/${searchTerm.value}`)
        .then(response => response.json())
        .then((data) => {
          if (data.slips) {
            slips.value = data.slips
            notice.value = null
          }
          else {
            slips.value = []
            notice.value = data.message.text
          }
        }).catch(error => error.value = error)
    }

    return {
      searchTerm,
      notice,
      slips,
      error,
      callSearch,
    }
  },

}
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
