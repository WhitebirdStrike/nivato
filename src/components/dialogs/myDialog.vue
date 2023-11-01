<template>
  <section>
    <teleport to=".modals-container">
      <template v-if="showmodal">
        <div class="modalCard">
          <h1>halloasd</h1>
          <button @click="showmodal = false">Close</button>
          bruh
          <div v-if="showmodal" class="modal"></div>
        </div>
      </template>
    </teleport>
  </section>
  <button @click="showmodal = !showmodal">Toggle Modal</button>
</template>

<script setup>
/*
imports
*/

import { ref } from "vue";

/*
modal
*/

const showmodal = ref(false);
</script>

<style scoped>
.modalCard {
  border: 1px solid black;
  margin: 2px;
}
</style>
