<template>
  <div class="bodyOfApp">
    <NavBar />
    <RouterView />
    <div class="footerOfApp">
      <Footer></Footer>
    </div>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import NavBar from "@/components/Global/NavBar.vue";
import Footer from "@/components/Global/Footer.vue";
</script>

<style scoped>
.bodyOfApp {
  min-height: 90vh;
  display: flex;
  flex-direction: column;
}

.footerOfApp {
  margin-top: auto;
}
</style>
