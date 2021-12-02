---
title: Search by object properties Vue 3 (composable)
description: custom hook for searching by object properties
---

<div class="text-center mb-8">
  <!-- You can use Vue components inside markdown -->
  <carbon-dicom-overlay class="text-4xl -mb-6 m-auto" />
  <h3> Search by object properties (composable)</h3> 
  <p>custom hook for searching object properties by their value</p>
</div>

## Demo

<search-list-by-query />

```js
// useSearchableList.ts

interface SearchableListProps {
  items: Ref<Array<{}>>
  query: Ref<string>
  searchableProps: Ref<Array<string>>
}
export const useSearchableList = ({ items, query, searchableProps }: SearchableListProps) => {
  const results = computed(() => {
    // check if we have an actual value to use for search
    if (!query.value)
      return items.value

    // build a Regex to search the item object properties
    const matchRE = new RegExp(query.value, 'i')
    return items.value.filter((item) => {
      return searchableProps.value.some(prop => matchRE.test(String((item as any)[prop])))
    })
  })
  return results
}


```

That's it. Import and use in any component. Here is an example code.

### View

```js
<template>
  <input v-if="searchable" v-model="query" type="text" />

    <ul class="list-none">
      <div v-if="results">

        <div v-for="item in results" :key="item.id">
          <h3>
            {{ item.name }}
          </h3>
          <h6>
            {{ item.email }}
          </h6>
          <p class="text-xs">
            {{ item.phone }}
          </p>
        </div>
        <div v-if="results.length == 0">
          <h1>Not found</h1>
        </div>
      </div>
      <div v-else>
        <h1>No data</h1>
      </div>
    </ul>
  </div>
</template>
```

### Logic
```js
// searchable-list.vue
<script setup lang='ts'>
import { ComputedRef } from '@vue/reactivity'

// import and use here 👇
import { useSearchableList } from '~/composable/useSearchableList'

// fake data
const items = ref([ {...}]) 

// optional
const props = defineProps({
  searchable: {
    type: Boolean,
    default: true,
  },
})

let results: ComputedRef<any[]>
const query = ref('')


if (props.searchable) {
// free to manipulating this props to search optionally
  const searchableProps = ['email', 'name', 'phone']
  
// get result as computed ref 👇
  results = useSearchableList({
    items,
    query,
    searchableProps,
  })
}
</script>

```



Happy learning  <span class="animate-pulse text-xl"> ✨ </span>

