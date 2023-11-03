<template>
  <p>{{ count }}</p>
  <button @click="count++"></button>
  <main>
    <section class="flexitup">
      <TrollCard
        :title="trollCards[0].title"
        :description="trollCards[0].description"
      />
      <TrollCard
        :title="trollCards[1].title"
        :description="trollCards[1].description"
      />
      <TrollCard
        :title="trollCards[2].title"
        :description="trollCards[2].description"
      />
    </section>
    <section class="flexitup">
      <TrollCard
        :title="trollCards[3].title"
        :description="trollCards[3].description"
      />
      <TrollCard
        :title="trollCards[4].title"
        :description="trollCards[4].description"
      />

      <Modal :showTroll="showTroll" @closeTroll="showTroll = !showTroll" />
      <button class="Trolldescription">{{ Trollinfo }}</button>
    </section>
    <!-- <section v-for="troll in trollCards" :key="troll.id" >
      <TrollCard :title="troll.title" :description="troll.description" />
    </section> -->
    <div class="modals-container"></div>
    <CardModal> </CardModal>
  </main>
</template>
<script setup>
/*
imports
*/

import { ref, defineProps, defineEmits } from "vue";
import TrollCard from "@/components/cards/card.vue";
import CardModal from "@/components/dialogs/myDialog.vue";
const trollCards = ref([
  {
    title: "Troll 1",
    description: "Troll 1 description",
    id: 0,
  },
  {
    title: "Troll 2",
    description: "Troll 2 description",
    id: 1,
  },
  {
    title: "Troll 3",
    description: "Troll 3 description",
    id: 2,
  },
  {
    title: "Troll 4",
    description: "Troll 4 description",
    id: 3,
  },
  {
    title: "Troll 5",
    description: "Troll 5 description",
    id: 4,
  },
]);
/*
counter
*/
const count = ref(0);

const { showTroll } = defineProps(["showTroll"]);
const { closeTroll } = () => {};
</script>

<style scoped>
.flexitup {
  display: flex;
}
</style>
