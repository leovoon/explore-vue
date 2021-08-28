<template>
  <div class="px-10 py-4 dark:bg-dark-900">
    <div class="logo w-full flex justify-center items-center my-1">
      <svg
        viewBox="0 0 24 24"
        aria-label="Twitter"
        fill="#1da1f2"
        class="
        dark:fill-light-50
          w-8
          h-8
          r-13gxpu9
          r-4qtqp9
          r-yyyyoo
          r-16y2uox
          r-lwhw9o
          r-dnmrzs
          r-bnwqim
          r-1plcrui
          r-lrvibr
        "
      >
        <g>
          <path
            d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"
          />
        </g>
      </svg>
    </div>
    <div class="w-full flex flex-col justify-center items-stretch space-y-5">
      <h4 class="self-start font-bold text-2xl">
        Create your account
      </h4>
      <div
        class="relative my-4
      border dark:border-dark-50 rounded dark:text-gray-500 focus-within:(border-light-blue-500 text-light-blue-500 dark:text-light-blue-500) "
      >
        <input
          id="name"
          v-model="name"
          type="text"
          placeholder=" "
          class="px-2 pt-4 rounded  dark:text-white text-dark-200 leading-10  block w-full appearance-none focus:outline-none bg-transparent"
        >
        <label for="name" class="font-thin absolute top-3 text-lg left-2 -z-{-1} origin-top-left duration-300 ease-in-out">Name</label>
      </div>

      <div
        v-show="!modeEmail"
        class="relative my-4
      border dark:border-dark-50 rounded dark:text-gray-500 focus-within:(border-light-blue-500 text-light-blue-500 dark:text-light-blue-500) "
      >
        <input
          id="Phone"
          v-model="phone"
          type="text"
          placeholder=" "
          class="px-2 pt-4 rounded text-dark-200 dark:text-white leading-10  block w-full appearance-none focus:outline-none bg-transparent"
        >
        <label for="phone" class="font-thin absolute top-3 text-lg left-2 -z-{-1} origin-top-left duration-300 ease-in-out">Phone</label>
      </div>

      <div
        v-show="modeEmail"
        class="relative my-4
      border dark:border-dark-50 rounded dark:text-gray-500 focus-within:(border-light-blue-500 text-light-blue-500 dark:text-light-blue-500) "
      >
        <input
          id="Email"
          v-model="email"
          type="text"
          placeholder=" "
          class="px-2 pt-4 rounded text-dark-200 dark:text-white leading-10  block w-full appearance-none focus:outline-none bg-transparent"
        >
        <label for="phone" class="font-thin absolute top-3 text-lg left-2 -z-{-1} origin-top-left duration-300 ease-in-out">Email</label>
      </div>

      <p class="text-normal text-blue-400 self-start cursor-pointer" @click="togglePhone()">
        {{ modeEmail ? "Use phone instead" : "Use email instead" }}
      </p>
      <div class="text-left">
        <p class="text-lg font-bold">
          Date of birth
        </p>
        <p class="text-gray-600 text-left self-start">
          This will not be shown publicly. Confirm your own age, even if this
          account is for a business, a pet, or something else.
        </p>
      </div>
    </div>
    <button
      class="
        mt-14
        w-full
        rounded-full
        py-1.5
        text-sm
        font-semibold
        text-white
        bg-light-blue-500
      "
    >
      Next
    </button>
  </div>
</template>
<script lang="ts">
export default {
  setup() {
    const name = ref('')
    const email = ref('')
    const phone = ref('')
    const modeEmail = ref(true)
    const togglePhone = () => {
      return modeEmail.value = !modeEmail.value
    }

    return {
      modeEmail,
      togglePhone,
      name,
      email,
      phone,

    }
  },
}

</script>
<style scoped>

input:focus-within ~ label,
  input:not(:placeholder-shown) ~ label {
    @apply transform scale-75 -translate-y-3;
  }

.word-length {
  font-size: xx-small;
  display: absolute;
}

.dob {
  @apply pl-2.5 pt-2.5;
}

select {
  @apply px-2 pt-8 pb-2 border-1 rounded-md text-lg appearance-none;
}

</style>
