<script lang="ts" setup>
  import { ref, defineEmits } from 'vue'

  const emit = defineEmits(['increment'])
  let count = ref(0)

  const handleClick = () => {
    count.value++
    emit('increment', count.value * 2)
  }

</script>

<template>
  <button @click="handleClick">Increment</button>
</template>

<style scoped></style>
