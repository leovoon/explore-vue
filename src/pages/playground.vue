<template>
  <div class="w-full flex flex-col items-center justify-center">
    <h1>Playground</h1>

    <select v-model="selected">
      <option v-for="option in options" :key="option.mode" :value="option.mode">
        Showing {{ option.label }}
      </option>
    </select>
    <div class="space-x-4">
      <label for="picture">Show Picture?</label>
      <input v-model="checked" name="picture" type="checkbox">
      <span>{{ checked }}</span>
    </div>

    <user-list>
      <template #userlist="{list}">
        <user-card-list :list="list">
          <template #[checkShowPicture]>
            {{ }}
          </template>
          <template #[selected]="{item}">
            {{ item }}
          </template>
        </user-card-list>
      </template>
    </user-list>
  </div>
</template>

<script lang="ts" setup>
import UserList from '~/components/UserList.vue'
const selected = ref('loginOnly')
const checked = ref(false)
const checkShowPicture = computed(() => !checked.value ? 'noPicture' : '')
const options = [
  { mode: 'loginOnly', label: 'Username only' }, { mode: 'loginAndType', label: 'User type + Username' }, { mode: 'loginId', label: 'User Id only' }]
</script>

<route lang="yaml">
meta:
  layout: default
</route>

<style scoped>
select {
  @apply min-w-max rounded-full m-4 px-4 py-1 border appearance-none dark:bg-green-700
}

</style>
