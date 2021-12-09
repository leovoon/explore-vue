<template>
  <p>Pinjam tng-input for demo</p>
  <tng-input input-only @get-amount="inputDisplay" />

  <!-- use here ✨ -->
  <swipe-button @on-swipe-end="handleSwipeEnd">
    Send {{ amount }}
    <template v-if="!isSwipeEnd" #icon>
      <TwemojiLoveLetter />
    </template>
    <template v-else #icon>
      <TwemojiFourLeafClover v-motion-pop />
    </template>
  </swipe-button>
</template>

<script setup lang='ts'>
const amount = ref('')
const isSwipeEnd = ref(false)
const inputDisplay = (inputAmount: string) => {
  amount.value = inputAmount
}
const handleSwipeEnd = (payload: boolean) => {
  if (payload)
    isSwipeEnd.value = true
}
</script>

<style scoped>
svg {
    @apply text-xl;
}
</style>
