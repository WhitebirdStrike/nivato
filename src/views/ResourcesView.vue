<template>
  <main>
    <div class="iceTable">
      <table>
        <thead>
          <tr class="titleTable">
            <th>Ice 1</th>
            <th>Ice 2</th>
            <th>Ice 3</th>
            <button>Description</button>
          </tr>
        </thead>
        <tbody>
          <tr v-for="ice in ice" :key="ice.id">
            <td>{{ ice.column1 }}</td>
            <td>{{ ice.column2 }}</td>
            <td>{{ ice.column3 }}</td>
            <button>bruh</button>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";

const ice = ref([
  { id: 1, column1: "Bruh", column2: "Bruh2", column3: "Bruh3" },
  { id: 2, column1: "Bruh 4", column2: "Bruh 5", column3: "Bruh 6" },
]);
</script>

<style scoped>
.iceTable {
  border: 1px solid black;
  margin: 2px;
}
</style>
