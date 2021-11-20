---
title: Qr code generator Vue 3 component
---

<div class="text-center">
  <carbon-dicom-overlay class="text-4xl -mb-6 m-auto" />
  <h3>Qr code generator component</h3>
  <p>vueuse - useQRCode, useShare</p>
</div>  

<qr-generator-demo/>

## How to Use
```js
  <qr-generator 
  :input-text="yourTextToGenerate" 
  :title="yourTitle"
  img-width="200"
  img-height="200"
  click-to-download />
```

| Props   |      Type      |  Optional |
|----------|:-------------:|------:|
| input-text |  String | no |
| title |  String | yes |
| img-width |  String | yes |
| img-height |  String | yes |
| click-to-download |  Boolean | yes |


## Code

```js
// QrGenerator.vue
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
```

```js
<script setup lang='ts'>
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
```

that's it.