<template>
  <!-- 
    ! means NOT
    != means NOT EQUAL
    ==  means EQUAL
    &&  means AND
   -->
  <div class="trollcard" v-if="title != 'Troll 4'">
    <div class="container">
      <input type="“text”" v-model="tittel" />
      <h2>
        <b>{{ title }}</b>
      </h2>
      <img src="@/images/Trololol.png" alt="Trolled" style="width: 25%" />
      <p>{{ description }}</p>
      <div v-for="(item, index) in TrollArray" :key="index">
        {{ parentMessage }} - {{ index }} - {{ item.message }}
        <button>{{ item.title }}></button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const tittel = ref("Trollface");

const parentMessage = ref("Hallo");
const TrollArray = ref([
  { title: "knapp 1" },
  { title: "knapp 2" },
  { title: "knapp 3" },
]);

// Accept data from parent through props
const props = defineProps({
  title: String,
  description: String,
});
</script>
<style scoped>
.trollcard {
  border: 1px solid black;
  margin: 2px;
}
</style>
