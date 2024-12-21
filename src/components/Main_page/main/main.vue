<script setup>
import Main_footer from "./main_footer.vue";
import { useItemStore } from "../../../stores/item";
import { APIClient } from "../../../api/ApiClient";
import { getClickItem } from "./model/getClickItem";
import { addInBasket } from "./model/addInBasket";
import { addInFavorite } from "./api/addInFavorite";
import axios from "axios";
import { onMounted, ref } from "vue";
import { keysMain } from "./keys/keysMain";
import { useStoreMain } from "./store/storeMain";
import MainNuv from "./ui/mainNuv.vue";

const store = useItemStore();
const storeMain = useStoreMain();
</script>

<template>
  <div class="main">
    <h1 class="main_title">Наш ассортимент</h1>
    <MainNuv></MainNuv>
    <div class="main_cards_container">
      <div class="card" v-for="el in storeMain.fruitesMassiv" :key="el.id">
        <RouterLink @click="getClickItem(el)" to="/CardItem">
          <img
            class="card_image"
            src="./assets/acfa6abfb0b4ae9a319c99c4875f3915 4.svg"
            alt="img"
          />
        </RouterLink>
        <div class="card_title">{{ el.name }}</div>
        <div class="price">
          <div class="price_now">От {{ el.price }}р</div>
          <div class="price_before">От {{ Number(el.price) + 50 }}р</div>
        </div>
        <div class="button_card">
          <button class="switcher"></button>
          <button class="searching"></button>
          <button
            :class="el.active ? 'favorite-like' : 'favorite-desable'"
            @click="addInFavorite(el)"
          ></button>
          <button class="in_basket" @click="addInBasket(el, store)">
            В корзину
          </button>
        </div>
      </div>
    </div>
  </div>
  <Main_footer />
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
}
.main_title {
  margin-bottom: 1em;
  font-size: 72px;
}
.main_cards_container {
  display: grid;
  grid-template-columns: repeat(4, 23%);
  gap: 40px;
  margin-top: 7em;
}
.card {
  background: rgba(214, 215, 219, 0.45);
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
  border-radius: 30px;
  margin-bottom: 4em;
  width: 20vw;
  height: max-content;
  transition: all 0.3s ease;
}
.card:hover {
  box-shadow: 1px 1px 10px rgb(93, 93, 93);
}
.card_image {
  width: 18vw;
  border-radius: 30px;
}
.card_title {
  font-weight: 700;
  font-size: 21px;
}
.card_subtext {
  width: 18vw;
}
.price {
  display: flex;
  gap: 20px;
  font-weight: 700;
}
.price_now {
  color: rgba(218, 92, 92, 1);
}
.price_before {
  color: rgba(54, 54, 54, 0.25);
  text-decoration: line-through;
}
.button_card {
  display: flex;
  justify-content: space-around;
}
.button_card * {
  min-width: 55px;
  height: 55px;
  border-radius: 20px;
  background-repeat: no-repeat;
  background-size: 60%;
  background-position: center;
  border: none;
  background-color: rgba(214, 215, 219, 0.183);
}
.switcher {
  background-image: url(./assets/switcher.svg);
}
.searching {
  background-image: url(./assets/searching.svg);
}
.favorite-like {
  background-image: url(./assets/like.svg);
}
.favorite-desable {
  background-image: url(./assets/icons-02.png);
}
.in_basket {
  flex: 1;
  background-color: rgba(254, 179, 2, 1);
  transition: all 0.5s ease;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
}
.in_basket:hover {
  background-color: rgba(254, 179, 2, 0.7);
}
.in_basket:active {
  background-color: black;
}

.dont_basket {
  background-color: rgb(69, 69, 69);
  color: #fff;
}
</style>
