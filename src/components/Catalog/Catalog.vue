<script setup>
import { ref, onMounted, watch, inject } from "vue";
import axios from "axios";
import { searchFruit } from "./model/searchFruitInArr";
import Footer from "../Main_page/footer/Footer.vue";
import Header_line from "../Main_page/header/header_line.vue";
import Main_footer from "../Main_page/main/main_footer.vue";
import { RouterLink } from "vue-router";
import { APIClient } from "../../api/ApiClient";
import { Keys } from "./keys/CatalogKeys";

const arrDriedFruits = ref([]);
const arrSort = ref([]);
const categories = ref("");
const pages = ref();
const search = ref("");
const searchResult = ref({});

const useSearchFruit = () => {
  searchFruit(searchResult, arrDriedFruits, search);
};

onMounted(async () => {
  arrDriedFruits.value = await APIClient.getRes();
});

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

function getCategories(event) {
  categories.value = event.target.innerText.toLowerCase();
  console.log(categories.value);
}

function Sorted() {
  searchResult.value = "";
  arrSort.value = [];
  arrDriedFruits.value.forEach((el) => {
    if (el["categories"].includes(categories.value)) {
      arrSort.value.push(el);
    }
  });
  pages.value = Math.round(arrSort.value.length / 9);
  console.log(pages.value);
}

function getClickItem(el) {
  if (localStorage.getItem("ItemCard")) {
    localStorage.removeItem("ItemCard");
    localStorage.setItem("ItemCard", JSON.stringify(el));
  } else {
    localStorage.setItem("ItemCard", JSON.stringify(el));
  }
}

watch(categories, Sorted);
onMounted(inject("scrollTo"));
</script>

<template>
  <Header_line />
  <div class="Catalog_title">Наш ассортимент</div>
  <div class="Catalog_cont">
    <div class="Categories">
      <div class="Categories_title">Категории</div>
      <div class="Categories_items">
        <li
          class="item_cat"
          v-for="(el, index) in Keys.arrCategories"
          :key="index"
          @click="getCategories"
        >
          {{ el }}
        </li>
      </div>
    </div>
    <div class="Assortment">
      <div class="assortement_line">
        <div class="slide_page">
          <button class="btn_slide btn_back"></button>
          <div class="pages">
            <div class="page_numb" v-for="el in pages">
              {{ el }}
            </div>
          </div>
          <button class="btn_slide btn_next"></button>
        </div>
        <div class="searh_field">
          <div class="h_m_l_search">
            <input
              v-model="search"
              placeholder="Кешью Австралийский"
              class="search_input"
            />
            <button
              @click="useSearchFruit(searchResult, arrDriedFruits, search)"
              class="search_button"
            >
              <img src="../Main_page/header/assets/search.svg" alt="search" />
            </button>
          </div>
        </div>
      </div>
      <div class="assortement_cards">
        <div class="card" v-if="searchResult.id > 0">
          <RouterLink @click="getClickItem(searchResult)" to="/CardItem">
            <img
              class="card_image"
              src="../Main_page/main/assets/acfa6abfb0b4ae9a319c99c4875f3915 4.svg"
              alt="img"
            />
          </RouterLink>
          <div class="card_title">{{ searchResult.name }}</div>
          <div class="price">
            <div class="price_now">От {{ searchResult.price }}р</div>
            <div class="price_before">
              От {{ Number(searchResult.price) + 50 }}р
            </div>
          </div>
          <div class="button_card">
            <button class="switcher"></button>
            <button class="searching"></button>
            <button class="favorite-desable"></button>
            <button class="in_basket">В корзину</button>
          </div>
        </div>
        <div class="card" v-for="el in arrSort" v-else>
          <RouterLink @click="getClickItem(el)" to="/CardItem">
            <img
              class="card_image"
              src="../Main_page/main/assets/acfa6abfb0b4ae9a319c99c4875f3915 4.svg"
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
            <button class="in_basket">В корзину</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Main_footer />
  <Footer />
</template>

<style scoped lang="scss">
.Catalog_title {
  font-size: 44px;
  text-align: center;
  margin-top: 2em;
}
.Categories {
  background-color: rgba(61, 103, 186, 0.05);
  border-radius: 3em;
  display: flex;
  flex-direction: column;
  gap: 1.7em;
  padding: 43px 100px 33px 33px;
  .Categories_title {
    font-weight: 700;
    font-size: 18px;
    margin-left: 1em;
  }
}
.Assortment {
  display: flex;
  flex-direction: column;
  gap: 4em;
}
.assortement_cards {
  display: grid;
  grid-template-columns: repeat(3, auto);
}
.assortement_line {
  // border: solid 1px darkcyan;
  display: flex;
  width: 65vw;
  justify-content: space-between;
  .slide_page {
    display: flex;
    gap: 2em;
    .pages {
      display: flex;
      justify-content: center;
      gap: 0.5em;

      .page_numb {
        font-size: 24px;
        color: #c0c0c0;
        font-weight: 700;
      }
      // .activePage {

      // }
    }
    .btn_slide {
      width: 2.5em;
      height: 2.5em;
      border-radius: 0.5em;
      border: none;
      transition: all 0.3s ease;
    }
    .btn_slide:active {
      transform: scale(90%);
    }
  }

  .btn_back {
    background-image: url("./assets/btn_left.svg");
    background-repeat: no-repeat;
    background-size: cover;
  }
  .btn_next {
    background-image: url("./assets/btn_right.svg");
    background-repeat: no-repeat;
    background-size: cover;
  }
}
.Catalog_cont {
  display: flex;
  gap: 2em;
  margin: 3em 0;
}
.Categories_items {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 1em;
  .item_cat {
    cursor: pointer;
  }
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
  background-image: url(../Main_page/main/assets/switcher.svg);
}
.searching {
  background-image: url(../Main_page/main/assets/searching.svg);
}
.favorite-like {
  background-image: url(../Main_page/main/assets/like.svg);
}
.favorite-desable {
  background-image: url(../Main_page/main/assets/icons-02.png);
}
.in_basket {
  flex: 1;
  background-color: rgba(254, 179, 2, 1);
}
</style>
