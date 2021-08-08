
<template>
  <div class="space-y-8 p-4 wrapper">
    <h1>TnG Transfer Money</h1>
    <div class="container flex flex-col text-left w-full items-stretch">
      <div class="rounded-t-sm text-blue-600 input-group relative group dark:(text-light-100)">
        <money3
          ref="myInput"
          v-model="amount"
          class="rounded-t-sm font-semibold bg-gray-100 border-b-2 w-full pt-4 pb-1 pl-3 caret-blue-500 dark:(bg-dark-50 bg-opacity-50) focus:outline-transparent"
          v-bind="config"
        ></money3>
        <span class="bg-blue-500 h-0.5 w-full bottom-0 left-0 absolute" :class="[{'bg-red-500': isError}]"></span>
        <button v-if="isError" class="rounded-full cursor-pointer font-light bg-blue-500 shadow-md text-white py-2 px-2.5 top-2 right-2 text-[10px] absolute dark:(bg-gray-300 text-gray-600 font-normal)">
          Reload Now
        </button>
        <span class="font-normal text-xs inset-y-0.5 left-3 absolute pointer-events-none" :class="[{'text-red-500': isError}]">Amount
        </span>
        <div v-if="!active" class="rounded-t-sm flex h-full bg-gray-100 border-b-2 border-gray-500 w-full pl-3 inset-0 text-gray-500 items-center absolute" @click="inputActive">
          Amount
        </div>
      </div>
      <span
        class="text-xs px-2 warn"
        :class="
          [isError
            ?
              'text-red-500'
            :
              'text-gray-500 dark:(text-gray-300)']"
      >
        You can transfer up to RM 20.00
      </span>

      <div class="flex font-light mt-4 w-full text-[11px] justify-between dark:(text-light-100)">
        <button class="rounded-full cursor-pointer outline-transparent bg-gray-200 py-1 px-2 dark:(bg-gray-300 text-gray-600) focus:ring-blue-600 focus:ring-1 focus:text-blue-600" @click="setActive(50) ">
          RM 50
        </button>
        <button class="rounded-full cursor-pointer outline-transparent bg-gray-200 py-1 px-2 dark:(bg-gray-300 text-gray-600) focus:ring-blue-600 focus:ring-1 focus:text-blue-600" @click="setActive(100)">
          RM 100
        </button>
        <button class="rounded-full cursor-pointer outline-transparent bg-gray-200 py-1 px-2 dark:(bg-gray-300 text-gray-600) focus:ring-blue-600 focus:ring-1 focus:text-blue-600" @click="setActive(150) ">
          RM 150
        </button>
        <button class="rounded-full cursor-pointer outline-transparent bg-gray-200 py-1 px-2 dark:(bg-gray-300 text-gray-600) focus:ring-blue-600 focus:ring-1 focus:text-blue-600" @click="setActive(200) ">
          RM 200
        </button>
        <button class="rounded-full cursor-pointer outline-transparent bg-gray-200 py-1 px-2 dark:(bg-gray-300 text-gray-600) focus:ring-blue-600 focus:ring-1 focus:text-blue-600" @click="setActive(0) ">
          Others
        </button>
      </div>

      <div
        class="flex flex-col mt-8 text-gray-600 group relative"
      >
        <span
          class="flex h-full text-xs pl-4 text-gray-600 items-top absolute pointer-events-none"
        >
          What's the transfer for?
        </span>

        <input
          ref="textInput"
          v-model="transferText"
          type="
          text"
          maxlength="50"
          class="rounded-t-sm font-semibold bg-gray-100 border-b-2 border-gray-500 placeholder-transparent py-4 pb-1 pl-4 group-focus-within:(border-blue-600"
        >
        <span v-show="!textInputActive" class="flex h-full bg-red-400 text-lg w-full pl-4 text-gray-600 items-center absolute" @click="inputActiveText">
          What's the transfer for?
        </span>
      </div>
      <span class="self-end" :class="[textLength === 50 ? 'text-red-500 font-semibold' : '' ] "> {{ textLength }}/50</span>

      <div class="mt-10 w-full px-2">
        <button class="rounded-full cursor-pointer bg-blue-600 text-xs text-white w-full py-1 focus:outline-transparent" :disabled="isValid">
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
      active: false, // number input active
      textInputActive: false,
      amount: 0,
      error: false,
      transferText: '',

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
    textLength() {
      return this.transferText.length
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
    inputActiveText() {
      this.textInputActive = true
      this.$refs.textInput.focus()
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
