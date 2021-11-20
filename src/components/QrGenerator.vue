<template>
  <a
    v-if="clickToDownload"
    :href="qrCode"
    :download="title"
  >
    <img
      :src="qrCode"
      :alt="inputText"
      :width="imgWidth"
      :height="imgHeight"
    />
  </a>

  <img
    v-else
    :src="qrCode"
    :alt="inputText"
    :width="imgWidth"
    :height="imgHeight"
  />
</template>

<script setup lang='ts'>
import { Ref } from '@vue/reactivity'
import { useQRCode } from '@vueuse/integrations/useQRCode'

const props = defineProps({
  inputText: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    default: 'https://google.com',
    require: false,
  },
  imgWidth: {
    type: String,
    default: '200',
    require: false,
  },
  imgHeight: {
    type: String,
    default: '200',
    require: false,
  },
  clickToDownload: {
    type: Boolean,
    default: true,
  },

})

const qrCode = useQRCode(props.inputText)
</script>
