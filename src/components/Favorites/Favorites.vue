<script setup>
import header_line from "../Main_page/header/header_line.vue";
import Footer from "../Main_page/footer/Footer.vue";
import card from "../Main_page/main/card.vue";

import { useItemStore } from "../../stores/item";
import axios from "axios";
import { onMounted, ref } from "vue";

const FavoritesMassiv = ref([]);
const store = useItemStore();

async function getResFavorites() {
  try {
    await axios
      .get("https://7425c7118c450585.mokky.dev/favorites")
      .then((res) => {
        FavoritesMassiv.value = res.data;
      });
  } catch (error) {
    console.error(error);
  }
}

getResFavorites();
</script>

<template>
  <header_line />
  <div class="Favorites_container">
    <card :fruitesMassiv="FavoritesMassiv" />
  </div>
  <Footer />
</template>

<style>
.Favorites_container {
  margin: 3em 0;
  display: grid;
  grid-template-columns: repeat(4, 25%);
}
</style>
