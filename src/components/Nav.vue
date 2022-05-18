<script lang="ts" setup>
import { ref } from "vue"
let admin = ref(false)
let isShow = ref(false)
</script>

<template>
  <a id="profile" href="/profile">My Profile</a>
  <a v-if="admin" id="admin" href="/admin">Admin</a>
  <div id="show" v-show="isShow">shower</div>
</template>

<style scoped></style>
