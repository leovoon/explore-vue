<template>
  <div>
    <p class="text-center">
      practical example of sorting
    </p>

    <div class="flex justify-around items-center">
      <p class="text-sm mt-4 mb-2">
        Ordered by '{{ order }}'
      </p>
      <select v-model="orderDirection" class="p-.5 inline-flex items-center border border-light-blue-300 rounded dark:text-dark-50 focus:outline-none dark:bg-gray-800 dark:text-light-300">
        <option value="asc">
          asc
        </option>
        <option value="desc">
          desc
        </option>
      </select>
    </div>

    <div class="text-sm mt-4 flex justify-around dark:text-light-800">
      <button :class="checkActive('body')" @click="sortByOrder('body')">
        Comment
      </button>
      <button :class="checkActive('name')" @click="sortByOrder('name')">
        Username
      </button>
      <button :class="checkActive('email')" @click="sortByOrder('email')">
        Email
      </button>
    </div>
    <div class="comments-list">
      <ul v-if="sortedComments" class="space-y-4">
        <li v-for="comment in sortedComments" :key="comment.id" class="m-4 rounded-md border p-3 text-xs shadow-md bg-light-blue-100 dark:border-transparent cursor-pointer dark:text-light-200 dark:bg-gray-800 dark:hover:(transform -translate-y-0.5 transition-transform)">
          <div class="comment-text mb-2 text-left">
            {{ comment.body }}
          </div>

          <div class="name flex justify-around">
            <span class="text-pink-500 ">{{ comment.email }}</span>
            <span class="text-blue-500">{{ comment.name }} </span>
          </div>
        </li>
      </ul>
      <p v-else-if="error" class="text-sm text-red-500">
        Error fetching data
      </p>
      <p v-else class="text-sm text-blue-500">
        Loading...
      </p>
    </div>
  </div>
</template>

<script lang="ts">
interface UserComment {
  postId: number
  id: number
  name: string
  email: string
  body: string
}
      type OrderTerm = 'body' | 'name' | 'email'
      type OrderDirection = 'asc' | 'desc'

export default defineComponent({
  setup() {
    const comments = ref<UserComment[]>([])
    const error = ref<string>()
    const order = ref<OrderTerm>('body')
    const orderDirection = ref<OrderDirection>('asc')

    onMounted(() => {
      fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(json => comments.value = json.slice(0, 5))
        .catch(error => error.value = error)
    })

    const sortedComments = computed(() => {
      return [...comments.value].sort((a: UserComment, b: UserComment) => {
        if (orderDirection.value === 'asc')
          return a[order.value] > b[order.value] ? 1 : -1
        return a[order.value] < b[order.value] ? 1 : -1
      })
    })

    const sortByOrder = (term: OrderTerm) => {
      order.value = term
    }

    const checkActive = (term: OrderTerm) => {
      return order.value === term ? 'outline-blue-400' : null
    }
    return {
      error,
      order,
      orderDirection,
      sortedComments,
      sortByOrder,
      checkActive,
    }
  },
})
</script>

    <style scoped>
    button {
      @apply rounded bg-light-blue-200 px-2 py-1 focus:outline-light-blue-400 dark:bg-gray-800
    }
    </style>

    <route lang="yaml">
meta:
  layout: default
    </route>
