<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink class="navBar" to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<style scoped>
.wrapper {
  border: 1px solid black;
  margin: 2px;
}
.navBar {
  margin: 10px;
}
</style>
