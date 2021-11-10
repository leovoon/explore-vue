<template>
  <div>
    Vuex is a popular state management library built for the Vue framework, and it is the recommended library for state management by the Vue core team. It is based on the same flux architecture as Redux.
    <pre>
<code>
//store.js
import {createStore} from 'vuex'
const useStore = createStore({
  state: {
    todos: [
      { id: 1, title: '...', done: true }
    ]
  },
  getters: {
    doneTodos (state) {
      return state.todos.filter(todo => todo.done)
    }
  }
})
</code>
    </pre>
  </div>
</template>
