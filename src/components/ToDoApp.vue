<script lang="ts" setup>
  const todos = [
    {
      id: 1,
      text: 'Learn Vue.js 3',
      completed: false
    }
  ]
 
</script>

<template>
  <div>
    <div v-for="todo in todos" :key="todo.id" data-test="todo">
      {{ todo.text }}
    </div>
  </div>
</template>

<style scoped lang="sass">

</style>
