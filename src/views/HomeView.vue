<template>
  <p>{{ count }}</p>
  <button @click="count++"></button>
  <main>
    <section class="flexitup">
      <TrollCard />
      <TrollCard />
      <TrollCard />
    </section>
    <section class="flexitup">
      <TrollCard />
      <TrollCard />
    </section>
  </main>
</template>

<script setup>
/*
imports
*/

import { ref } from "vue";
import TrollCard from "@/components/cards/card.vue";

/*
counter
*/

const count = ref(0);
</script>

<style scoped>
.flexitup {
  display: flex;
}
</style>
