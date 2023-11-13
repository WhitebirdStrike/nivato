<template>
  <button @click="toggleModal(true)">Login</button>
  <div v-if="showModal == true" class="loginModal">
    <div>
      <button @click="toggleModal(false)">Close me</button>
      <!-- Login -->
      <div v-if="isLogin == true">
        <h1>Login Here</h1>
        <form @submit.prevent="login">
          <label for="username">Username:</label>
          <input v-model="username" type="text" id="username" required />

          <label for="password">Password:</label>
          <input v-model="password" type="text" id="password" required />

          <button type="submit">Login</button>
        </form>
        <button @click="loginRegistrerNavigation(false)">Go to Register</button>
      </div>
      <!-- Register -->
      <div v-if="isLogin == false">
        <h1>Register Her Her</h1>
        <button @click="loginRegistrerNavigation(true)">Go to Login</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
// Display modal based on State
const showModal = ref(false);
// Display Login or Registration window based on boolean
const isLogin = ref(true);

// Open and Close modal based on state sent into parameters
const toggleModal = (modalState) => {
  showModal.value = modalState;
  // If closing the modal = go as default to Login
  if (modalState == false) {
    isLogin.value = false;
  } else {
    isLogin.value = true;
  }
};

// If true = Login, if False = Register
const loginRegistrerNavigation = (windowToDisplay) => {
  isLogin.value = windowToDisplay;
};
</script>
<style scoped>
.loginModal {
  position: fixed;
  top: 25%;
  left: 25%;
  z-index: 9;
  width: 60vw;
  height: 60vh;
  background-color: darkred;
}
</style>
