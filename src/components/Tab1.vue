<template>
  <div>
    Pinia’s success can be attributed to its unique features (extensibility, store module organization, grouping of state changes, multiple stores creation, and so on) for managing stored data.
    <pre>
  <code>
// stores/todo.js
import { defineStore } from 'pinia'

export const useTodoStore = defineStore({
  id: 'todo',
  state: () => ({ count: 0, title: "Cook noodles", done:false })
})
  </code>
  </pre>
  </div>
</template>
