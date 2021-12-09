<template>
  <div class="space-y-8 p-4">
    <div class="inputWrapper">
      <label>Enter your preferred amount</label>
      <input
        v-model.lazy="amountShow"
        v-money="config"
        type="text"
        inputmode="numeric"
        maxlength="20"
        @input="sendAmount(amountShow)"
      />
    </div>
    <span v-if="!inputOnly">Min reload amount is RM 10</span>
  </div>
</template>

<script lang="ts" setup>
import { VMoney3 as vMoney } from 'v-money3'

const amountShow = ref('')
const config = ref({
  decimal: '.',
  thousands: ',',
  prefix: 'RM ',
  precision: 2,
  masked: false,
  disableNegative: true,
})

defineProps({
  inputOnly: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['getAmount'])
const sendAmount = (amt: string) => {
  emit('getAmount', amt)
}

</script>

<style scoped>
*, *:hover, *:focus {
  @apply outline-transparent;

}

.inputWrapper {
  @apply text-lg relative w-full;
}

.inputWrapper input {
  @apply border-b  bg-gray-100 w-full px-3 pt-6 pb-2 dark:(text-light-700 bg-dark-50);
}

.inputWrapper label {
  @apply text-xs absolute inset-1 pointer-events-none left-2 text-blue-600 dark:text-blue-300;
}

span{
  @apply w-full text-gray-500 text-xs;
}

</style>
