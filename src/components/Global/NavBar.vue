<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink class="navBar" to="/">
          <img src="@/images/Logo.jpg" alt="logoimage" class="navbarLogo" />
        </RouterLink>
        <RouterLink class="navBarAbout" to="/about">About</RouterLink>
        <RouterLink class="navBarProfil" to="/profil">Profil</RouterLink>
        <RouterLink class="navBarResources" to="/resources"
          >Resources</RouterLink
        >
        <Modaloflogin />
      </nav>
    </div>
  </header>
</template>
<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import LoginModal from "@/components/Global/LoginModal.vue";
import Modaloflogin from "@/components/Global/Modaloflogin.vue";
</script>

<style scoped>
.wrapper {
  border: 1px solid black;
  margin: 2px;
}
.navBar {
  margin: 10px;
}

.navBarAbout {
  margin: 10px;
}

.navBarProfil {
  margin: 10px;
}

.navbarLogo {
  width: 100px;
  height: 100px;
  object-fit: cover;
}

.navBarResources {
  margin: 10px;
}

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
