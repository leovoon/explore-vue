<template>
  <div class="grid place-items-center">
    <h4>Enter text:</h4>
    <input v-model="textToGenerate" type="text" />
    <h4>Enter filename:</h4>
    <input v-model="userInputText" type="text" />
    <div class="inline-flex items-center space-x-5">
      <span>Size</span>
      <input v-model="userSetWidth" type="range" min="200" max="600" />
    </div>
    <qr-generator
      :input-text="textToGenerate"
      :title="userInputText"
      :click-to-download="userCtdOption"
      :img-width="userSetWidth"
    />
    <label class="flex items-center space-x-2 ">
      <input v-model="userCtdOption" type="checkbox" :checked="userCtdOption" />
      <span class="inline-block">
        Option Click to Download
      </span>
    </label>
  </div>
</template>

<script setup lang='ts'>

const textToGenerate = ref('https://github.com/leovoon/')
const userInputText = ref('My github QR code')
const userCtdOption = ref(false)
const userSetWidth = ref('200')
</script>

<style scoped>
input[type=text] {
    @apply p-2 block mb-5 dark:text-gray-600 w-full
}
h4 {
    @apply place-self-start
}
</style>
