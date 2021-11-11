<template>
  <img :src="BigImage" class="w-full" alt="big image">
</template>

<script lang="ts" setup>
import BigImage from '~/assets/images/big-image.jpg'

// @ts-ignore, this will render async setup()
const getBigImage = await new Promise(resolve => setTimeout(resolve, 4000))

</script>
