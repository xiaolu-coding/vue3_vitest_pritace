<script lang="ts" setup>
import { reactive, ref } from "vue"

let newTodo = ref("")
let todos = reactive([
  {
    id: 1,
    text: "Learn Vue.js 3",
    completed: false,
  },
])

const createTodo = () => {
  todos.push({
    id: 2,
    text: newTodo.value,
    completed: false,
  })
}
</script>

<template>
  <div>
    <div v-for="todo in todos" :key="todo.id" data-test="todo">
      {{ todo.text }}
    </div>
    <form data-test="form" @submit.prevent="createTodo">
      <input data-test="new-todo" v-model="newTodo" />
    </form>
  </div>
</template>

<style scoped lang="sass"></style>
