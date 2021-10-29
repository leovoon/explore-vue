<template>
  <slot>
    <div class="block m-3">
      (scoped slot: slotprops)
    </div>
  </slot>
  <div class="flex flex-wrap justify-start items-start">
    <slot name="buttons">
      <button v-for="d in data" :key="d.first">
        <slot name="mode1" :mode="` ${d.first} ${d.last}`"></slot>
        <slot name="mode2" :mode="` ${d.first}` "></slot>
        <slot name="mode3" :mode="` ${d.prefix} ${d.first} ${d.last}` "></slot>
      </button>
    </slot>
  </div>
</template>

<script lang='ts' setup>

interface buttonStyle {
  first: string
  last: string
  prefix: string
}

const data = ref<buttonStyle[]>([])

function delay(arg0: number) {
  return new Promise(resolve => setTimeout(resolve, arg0))
}
// create an asnyc action
const items = async() => {
  // do something async
  await delay(10)
  // update the data
  data.value = [{ first: 'Elephant', last: 'Dee', prefix: 'Mrs' },
    { first: 'Tiger', last: 'Dee', prefix: 'Mr' }, { first: 'Lion', last: 'Dee', prefix: 'Mr' },
    { first: 'Elephant', last: 'Dee', prefix: 'Mrs' },
    { first: 'Tiger', last: 'Dee', prefix: 'Mr' }, { first: 'Lion', last: 'Dee', prefix: 'Mr' },
    { first: 'Elephant', last: 'Dee', prefix: 'Mrs' },
    { first: 'Tiger', last: 'Dee', prefix: 'Mr' }, { first: 'Lion', last: 'Dee', prefix: 'Mr' },
    { first: 'Elephant', last: 'Dee', prefix: 'Mrs' },
    { first: 'Tiger', last: 'Dee', prefix: 'Mr' }, { first: 'Lion', last: 'Dee', prefix: 'Mr' },
    { first: 'Elephant', last: 'Dee', prefix: 'Mrs' },
    { first: 'Tiger', last: 'Dee', prefix: 'Mr' }, { first: 'Lion', last: 'Dee', prefix: 'Mr' },
    { first: 'Elephant', last: 'Dee', prefix: 'Mrs' },
    { first: 'Tiger', last: 'Dee', prefix: 'Mr' }, { first: 'Lion', last: 'Dee', prefix: 'Mr' },
    { first: 'Elephant', last: 'Dee', prefix: 'Mrs' },
    { first: 'Tiger', last: 'Dee', prefix: 'Mr' }, { first: 'Lion', last: 'Dee', prefix: 'Mr' },
    { first: 'Elephant', last: 'Dee', prefix: 'Mrs' },
    { first: 'Tiger', last: 'Dee', prefix: 'Mr' }, { first: 'Lion', last: 'Dee', prefix: 'Mr' },
    { first: 'Elephant', last: 'Dee', prefix: 'Mrs' },
    { first: 'Tiger', last: 'Dee', prefix: 'Mr' }, { first: 'Lion', last: 'Dee', prefix: 'Mr' },
    { first: 'Elephant', last: 'Dee', prefix: 'Mrs' },
  ]
}

onMounted(() => items())

</script>

<style scoped>
button {
    @apply inline-flex gap-1 text-xs min-w-max rounded-xl px-2 py-1 shadow-black shadow-md;
}
</style>
