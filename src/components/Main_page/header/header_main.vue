<script setup>
import { ref } from "vue";
import axios from "axios";
import { RouterLink, useRouter } from "vue-router";
const search = ref("");
const Item = ref();
const router = useRouter();
const errorSearch = "Нет такого товара";

async function searchItem() {
  await axios
    .get(`https://7425c7118c450585.mokky.dev/fruites?name=${search.value}`)
    .then((res) => {
      // console.log(res.data);
      if (res.data.length != 0) {
        Item.value = res.data;
        getClickItem(Item.value);
        console.log(Item.value);
        search.value = "";
        router.push("/CardItem");
      } else {
        alert(errorSearch);
      }
    });
}

function getClickItem(el) {
  if (localStorage.getItem("ItemCard")) {
    localStorage.removeItem("ItemCard");
    localStorage.setItem("ItemCard", JSON.stringify(el));
  } else {
    localStorage.setItem("ItemCard", JSON.stringify(el));
  }
}
</script>

<template>
  <div class="header_main">
    <div class="header_main_left">
      <div class="h_m_l_title">
        <span class="Dri">Dri</span>ed <br />
        <span class="fruits">Fruits</span>
      </div>
      <div class="h_m_l_subtext">
        Lorem Ipsum - это текст-"рыба", часто используемый в <br />печати и
        вэб-дизайне. Lorem Ipsum является стандартной
      </div>
      <div class="h_m_l_search">
        <input
          v-model="search"
          placeholder="Кешью Австралийский"
          class="search_input"
        />

        <a @click="searchItem" class="search_button">
          <img src="./assets/search.svg" alt="search" />
        </a>
      </div>
    </div>
    <div class="header_main_right">
      <div class="right_image_block"></div>
    </div>
  </div>
</template>

<style scoped>
.header_main {
  display: flex;
  justify-content: space-between;
  margin-top: 5em;
  margin-bottom: 10em;
}
.header_main_left {
  display: flex;
  flex-direction: column;
}
.h_m_l_title {
  font-size: 161px;
  font-weight: 300;
}
.Dri {
  color: rgba(218, 92, 92, 1);
}
.fruits {
  font-weight: 900;
}
.h_m_l_subtext {
  color: rgba(96, 95, 95, 1);
  font-size: 24px;
  margin-bottom: 85px;
}
.h_m_l_search {
  min-width: 630px;
  min-height: 106px;
  display: flex;
  position: relative;
}
.search_input {
  padding-left: 30px;
  font-size: 23px;
  width: 550px;
  border: none;
  border-radius: 25px;
  background: rgba(128, 128, 128, 0.24);
  outline: none;
  transition: all 0.2s ease;
}
.search_input:focus {
  background: rgba(128, 128, 128, 0.153);
}
.search_button {
  width: 106px;
  position: relative;
  right: 50px;
  border-radius: 30px;
  border: none;
  background: rgba(254, 179, 2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
}
.right_image_block {
  background-color: gray;
  width: 40vw;
  height: 100vh;
}
</style>
