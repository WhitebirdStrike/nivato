<template>
  <div class="loginModal" v-if="showLogin">
    <div class="loginModal-content">
      <button @click="showLogin = false">Close</button>
      <form @submit.prevent="login">
        <label for="username">Username:</label>
        <input v-model="username" type="text" id="username" required />

        <label for="password">Password:</label>
        <input v-model="password" type="text" id="password" required />

        <button type="submit">Login</button>
      </form>
    </div>
  </div>
  <button @click="showLogin = !showLogin">Login</button>
</template>

<script setup>
import { ref } from "vue";

const showLogin = ref(false);
</script>
