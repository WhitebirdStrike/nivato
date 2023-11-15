<template>
  <button @click="toggleModal(true)">Login</button>
  <div v-if="showModal == true" class="loginModal">
    <div>
      <button @click="toggleModal(false)">Close me</button>
      <!-- Login -->
      <div v-if="isLogin == true">
        <h1>Login Here</h1>
        <pre>---{{ loginUserName }}---</pre>
        <form @submit.prevent="login">
          <label for="username">Username:</label>
          <input v-model="loginUserName" type="text" id="username" required />

          <label for="password">Password:</label>
          <input v-model="loginPassword" type="text" id="password" required />

          <button type="submit">Login</button>
        </form>
        <button @click="checkIfUserIsFound()">check</button>
        <button @click="loginRegistrerNavigation(false)">Go to Register</button>
      </div>
      <!-- Register -->
      <div v-if="isLogin == false">
        <h1>Register here</h1>
        <form class="registerModal" @submit.prevent="login">
          <div>
            <label class="mr-10" for="username">Username:</label>
            <input
              v-model="registerUserName"
              type="text"
              id="username"
              required
            />
          </div>

          <div>
            <label class="mr-10" for="password">Password:</label>
            <input
              v-model="registerPassword"
              type="text"
              id="password"
              required
            />
          </div>

          <div>
            <label class="mr-10" for="e-post">E-post</label>
            <input v-model="registerEpost" type="text" id="e-post" required />
          </div>
          <button>Registrer</button>
        </form>

        <button @click="testLocalSearch">Test</button>

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

// Login Variables
const loginUserName = ref("");
const loginPassword = ref("");

// Registration Variables
const registerUserName = ref("");
const registerPassword = ref("");
const registerEpost = ref("");

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

const testLocalSearch = () => {
  localStorage.setItem("userData", registerUserName.value);
  localStorage.setItem("userPassword", registerPassword.value);
};

const checkIfUserIsFound = () => {
  const userData = localStorage.getItem("userData");
  const userPassword = localStorage.getItem("userPassword");
  if (userData == loginUserName.value && userPassword == loginPassword.value) {
    console.log("Hei igjen");
  }
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

.registerModal {
  margin: 10px;
  display: flex;
  flex-direction: column;
}

.mr-10 {
  padding: 10px;
  display: flex;
}
</style>
