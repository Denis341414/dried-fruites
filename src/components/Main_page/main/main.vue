<script setup>
import Main_footer from "./main_footer.vue";
import { useItemStore } from "../../../stores/item";

import axios, { Axios } from "axios";
import { onMounted, ref } from "vue";

const store = useItemStore();

const fruitesMassiv = ref([]);
const activeButton = ref(null);
const titleItem = ref("");
const priceItem = ref("");
const categoryItem = ref("");
const arrFavorite = ref([]);
const masButton = [
  "Сухофрукты экзотические",
  "Ягоды сушеные",
  "Цукаты",
  "Восточные сладости",
  "Снеки",
  "Семена и бобовые",
  "Бакалея",
];

onMounted(() => {
  arrFavorite.value = [];
  for (let key in localStorage.key) {
    arrFavorite.value.push(localStorage.getItem(key));
  }
  console.log(arrFavorite.value);
});

async function getResOnBack() {
  try {
    await axios
      .get("https://7425c7118c450585.mokky.dev/fruites")
      .then((res) => {
        fruitesMassiv.value = res.data;
        // console.log(res)
      });
  } catch (err) {
    console.error(err);
  }
}

function getParamItem(el) {
  titleItem.value = el.name;
  priceItem.value = el.price;
  categoryItem.value = el.categories;
  console.log(titleItem.value, priceItem.value);
}

function getClickItem(el) {
  if (localStorage.getItem("ItemCard")) {
    localStorage.removeItem("ItemCard");
    localStorage.setItem("ItemCard", JSON.stringify(el));
  } else {
    localStorage.setItem("ItemCard", JSON.stringify(el));
  }
}

function addInBasket(el) {
  store.ItemsInBasket.push(el);
  console.log(store.ItemsInBasket);
  // addedInBasket(el.id, "dont_basket");
}

function addedInBasket(elementID, style) {
  const element = document.getElementById(elementID);
  element.class;
}

async function addInFavorite(element) {
  try {
    element.active = !element.active;
    if (element.active == true) {
      localStorage.setItem(element["name"], JSON.stringify(element));
      await axios.post(
        "https://7425c7118c450585.mokky.dev/favorites",
        JSON.parse(localStorage.getItem(element["name"]))
      );
    }
  } catch (error) {
    console.log(error);
  }
}

onMounted(getResOnBack);
</script>

<template>
  <div class="main">
    <h1 class="main_title">Наш ассортимент</h1>
    <div class="main_nav">
      <button v-for="(element, index) in masButton" :key="index"></button>
    </div>
    <div class="main_cards_container">
      <div class="card" v-for="el in fruitesMassiv" :key="el.id">
        <RouterLink @click="getClickItem(el)" to="/CardItem">
          <img
            class="card_image"
            src="./assets/acfa6abfb0b4ae9a319c99c4875f3915 4.svg"
            alt="img"
          />
        </RouterLink>
        <div class="card_title">{{ el.name }}</div>
        <!-- <div class="card_subtext">{{ el. }} </div> -->
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
          <button class="in_basket" @click="addInBasket(el)">В корзину</button>
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
.main_nav {
  display: flex;
  gap: 3em;
}
.main_nav_item {
  list-style: none;
  font-size: 18px;
  border: none;
  background: green;
  padding: 13px;
  border-radius: 15px;
}
.main_nav_item_active {
  list-style: none;
  font-size: 18px;
  border: none;
  background: rgba(254, 179, 2, 1);
  border-radius: 15px;
  color: #fff;
  padding: 13px;
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
  transition: all 0.3s ease;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
}
.in_basket:hover {
  background-color: rgba(254, 179, 2, 0.7);
}

.dont_basket {
  background-color: rgb(69, 69, 69);
  color: #fff;
}
</style>
