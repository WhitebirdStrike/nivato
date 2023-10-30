<template>
  <div class="trollcard">
    <div class="container">
      <input type="“text”" v-model="tittel" />
      <h2>
        <b>Troll</b>
      </h2>
      <img src="@/images/Trololol.png" alt="Trolled" style="width: 25%" />
      <p>The big troll</p>
      <div v-for="(item, index) in myEpicArray" :key="index">
        <button>{{ item.title }}</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const tittel = ref("Trollface");

const myEpicArray = ref([
  { title: "knapp 1" },
  { title: "knapp 2" },
  { title: "knapp 3" },
]);
</script>
<style scoped>
.trollcard {
  border: 1px solid black;
  margin: 2px;
}
</style>
