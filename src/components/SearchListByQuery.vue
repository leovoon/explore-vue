<template>
  <div>
    <p>
      currently searching by values of properties {{ searchableProps }}
    </p>

    <input v-if="searchable" v-model="query" type="text" />

    <ul class="list-none">
      <div v-if="results">
        <button v-if="results.length !== 0" class="btn text-xs" @click="() => jsonMode = !jsonMode">
          toggle {{ jsonMode ? 'style' : 'json' }}
        </button>
        <div v-for="item in results" :key="item.id" v-motion-slide-left :delay="200" class="card">
          <h3 v-if="!jsonMode">
            {{ item.name }}
          </h3>
          <h6 v-if="!jsonMode">
            {{ item.email }}
          </h6>
          <p v-if="!jsonMode" class="text-xs">
            {{ item.phone }}
          </p>
          <pre v-if="jsonMode">{{ item }}</pre>
        </div>
        <div v-if="results.length == 0" class="card">
          <h1>Not found</h1>
        </div>
      </div>
      <div v-else>
        <h1>No data</h1>
      </div>
    </ul>
  </div>
</template>

<script setup lang='ts'>
/* eslint-disable import/named */

import { ComputedRef } from '@vue/reactivity'
import { useSearchableList } from '~/composable/useSearchableList'

const items = ref([
  {
    id: 1,
    name: 'Yvonne Wei',
    email: 'first@example.com',
    phone: '0701740605',
  },
  {
    id: 2,
    name: 'Anthony Jee',
    email: 'second@test.com',
    phone: '0313900600',
  },
  {
    id: 3,
    name: 'Barak Obama',
    email: 'third@random.com',
    phone: '1406280400',
  },
  {
    id: 4,
    name: 'Elon Musk',
    email: 'random@random.com',
    phone: '1314520',
  },
])

const props = defineProps({
  searchable: {
    type: Boolean,
    default: true,
  },
})

const jsonMode = ref<boolean>(false)

let results: ComputedRef<any[]>
const searchableProps = ref(['email', 'name', 'phone'])

const query = ref('')
if (props.searchable) {
  // override the previous ref
  results = useSearchableList({
    items,
    query,
    searchableProps,
  })
}
</script>

<style scoped>

input {
  @apply w-full p-2 rounded-sm dark:text-green-700 border-2 border-green-400 focus:outline-none
}

.card {
  @apply rounded-md dark:bg-dark-600 dark:bg-opacity-80 dark:text-light-800 text-green-900 shadow-md my-2 px-4 pt-1 pb-4
}

pre {
  @apply bg-transparent text-green-900 dark:text-light-800
}
</style>
