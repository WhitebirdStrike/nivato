<template>
  <header>
    <div class="wrapper">
      <nav>
        <img src="@/images/Logo.jpg" alt="logoimage" width="25%" />
        <RouterLink class="navBar" to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
</template>
<script setup>
import { RouterLink } from "vue-router";
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
