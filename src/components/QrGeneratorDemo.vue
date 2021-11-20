<template>
  <div class="grid place-items-center">
    <h4>Enter text:</h4>
    <input v-model="textToGenerate" type="text" />
    <h4>Enter filename:</h4>
    <input v-model="userInputText" type="text" />
    <qr-generator
      :input-text="textToGenerate"
      :title="userInputText"
      :click-to-download="userCtdOption"
      img-height="200"
      img-width="200"
    />
    <label class="flex items-center space-x-2 ">
      <input v-model="userCtdOption" type="checkbox" :checked="userCtdOption" />
      <span class="inline-block">
        Click to Download
      </span>
    </label>
  </div>
</template>

<script setup lang='ts'>

const textToGenerate = ref('https://github.com/leovoon/')
const userInputText = ref('My github QR code')
const userCtdOption = ref(false)

</script>

<style scoped>
input[type=text] {
    @apply p-2 block mb-5 dark:text-gray-600 w-full
}
h4 {
    @apply place-self-start
}
</style>
