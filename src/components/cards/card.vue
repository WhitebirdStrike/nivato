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
      <button @click="toggleTroll()">Toggle Modal</button>

      <div v-if="showTroll">
        <h1>This is an epic modal</h1>
        <p>{{ title }}</p>
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

const infotroll = ref("Trolldescription");
const Trollinfo = ref("is good");

// Accept data from parent through props
const props = defineProps({
  title: String,
  description: String,
});

const showTroll = ref(false);

const toggleTroll = () => {
  if (showTroll.value == false) {
    showTroll.value = true;
  } else {
    showTroll.value = false;
  }
};

const openTroll = () => {
  showTroll.value = true;
};

const closeTroll = () => {
  showTroll.value = false;
};
</script>
<style scoped>
.trollcard {
  border: 1px solid black;
  margin: 2px;
}
</style>
