<template>
  <NavBar />
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "@/components/Global/NavBar.vue";
</script>

<style scoped></style>
