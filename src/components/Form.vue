<script lang="ts" setup>
import { ref, defineEmits } from 'vue'
const emit = defineEmits(['submit'])
let email = ref('')

const submit = () => {
  emit('submit', email.value)
}
</script>

<template>
  <div>
    <input type="email" v-model="email" />

    <button @click="submit">Submit</button>
  </div>
</template>

<style scoped></style>
