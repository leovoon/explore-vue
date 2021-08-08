
<template>
  <div class="wrapper p-4 space-y-8">
    <h1>TnG Transfer Money</h1>
    <div class="container w-full flex flex-col items-stretch text-left ">
      <div class="input-group relative  text-blue-600 dark:(text-light-100) rounded-t-sm group">
        <money3
          ref="myInput"
          v-model="amount"
          class=" pl-3 rounded-t-sm pt-4 pb-1 font-semibold border-b-2 dark:(bg-dark-50 bg-opacity-50)  caret-blue-500 bg-gray-100 w-full focus:outline-transparent"
          v-bind="config"
        ></money3>
        <span class="w-full absolute h-0.5 bottom-0 left-0 bg-blue-500" :class="[{'bg-red-500': isError}]"></span>
        <button v-if="isError" class=" absolute right-2 cursor-pointer top-2 rounded-full bg-blue-500 dark:(bg-gray-300 text-gray-600 font-normal) text-white  font-light text-[10px] px-2.5 py-2 shadow-md">
          Reload Now
        </button>
        <span class="text-xs font-normal absolute inset-y-0.5 left-3 pointer-events-none" :class="[{'text-red-500': isError}]">Amount
        </span>
        <div v-if="!active" class="w-full inset-0 rounded-t-sm pl-3 h-full flex items-center absolute text-gray-500 border-b-gray-500 border-2 bg-gray-100" @click="inputActive">
          Amount
        </div>
      </div>
      <span
        class="warn text-xs px-2"
        :class="
          [isError
            ?
              'text-red-500'
            :
              'text-gray-500 dark:(text-gray-300)']"
      >
        You can transfer up to RM 20.00
      </span>

      <div class="text-[11px] font-light flex w-full justify-between mt-4 dark:(text-light-100)">
        <button class="px-2 py-1 bg-gray-200 dark:(bg-gray-300 text-gray-600)  rounded-full outline-transparent cursor-pointer focus:ring-blue-600 focus:ring-1 focus:text-blue-600" @click="setActive(50) ">
          RM 50
        </button>
        <button class="px-2 py-1 bg-gray-200 dark:(bg-gray-300 text-gray-600)  rounded-full outline-transparent cursor-pointer focus:ring-blue-600 focus:ring-1 focus:text-blue-600" @click="setActive(100)">
          RM 100
        </button>
        <button class="px-2 py-1 bg-gray-200 dark:(bg-gray-300 text-gray-600)  rounded-full outline-transparent cursor-pointer focus:ring-blue-600 focus:ring-1 focus:text-blue-600" @click="setActive(150) ">
          RM 150
        </button>
        <button class="px-2 py-1 bg-gray-200 dark:(bg-gray-300 text-gray-600)  rounded-full outline-transparent cursor-pointer focus:ring-blue-600 focus:ring-1 focus:text-blue-600" @click="setActive(200) ">
          RM 200
        </button>
        <button class="px-2 py-1 bg-gray-200 dark:(bg-gray-300 text-gray-600)  rounded-full outline-transparent cursor-pointer focus:ring-blue-600 focus:ring-1 focus:text-blue-600" @click="setActive(0) ">
          Others
        </button>
      </div>

      <div class="w-full px-2 mt-10">
        <button class="w-full rounded-full text-xs focus:outline-transparent py-1 cursor-pointer bg-blue-600 text-white" :disabled="isValid">
          Confirm Transfer
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// pnpm i v-money3
import { Money3Component } from 'v-money3'

export default {
  name: 'TngInput',
  components: { money3: Money3Component },

  data() {
    return {
      active: false,
      amount: 0,
      error: false,
    }
  },
  computed: {
    config() {
      return {
        decimal: '.',
        thousands: ',',
        prefix: 'RM ',
        min: Number.MIN_SAFE_INTEGER,
        disableNegative: true,
        max: 10000000,
        precision: 2,
        masked: false,
      }
    },
    isError() {
      return this.amount > 20.00 ? this.error = true : this.error = false
    },
    isValid() {
      return this.amount === 0 || this.amount > 20.00 ? this.error = true : this.error = false
    },

  },
  mounted() {
    if (!this.active) this.error = false
  },
  methods: {
    setActive(amount) {
      this.active = true
      this.amount = amount
    },
    inputActive() {
      this.active = true
      this.$refs.myInput.$el.focus()
    },
  },

}

</script>

<style scoped>

  input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;

}

button:disabled,
button[disabled]{
  @apply bg-gray-300 text-gray-500;
}

</style>
