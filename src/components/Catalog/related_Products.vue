<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import { RouterLink, useRouter } from "vue-router";
import { useItemStore } from "../../stores/item";
import { useCatalogStore } from "./stores/CatalogStore";
import { useItemCardStore } from "./stores/ItemCardStore";
import { getClickItem } from "../Main_page/main/model/getClickItem";
import { addInBasket } from "../Main_page/main/model/addInBasket";

const catalogStore = useCatalogStore();
const store = useItemStore();
const ItemCardStore = useItemCardStore();
const router = useRouter();

onMounted(async () => {
  await axios
    .get(
      `https://7425c7118c450585.mokky.dev/fruites?categories=*${catalogStore.categories}`
    )
    .then((res) => {
      ItemCardStore.relatedProducts = [];
      for (let i = 0; i < 4; i++) {
        console.log(res.data[i]);
        ItemCardStore.relatedProducts.push(res.data[i]);
      }
      console.log(ItemCardStore.relatedProducts, catalogStore.categories);
    })
    .catch((err) => console.log(err));
});

function getClickItemHook(el) {
  getClickItem(el);

  router.push("/CardItem");
  window.scrollTo(0, 0);
  console.log(el);

  setTimeout(() => {
    router.go(0);
  }, 1);
}
</script>

<template>
  <div class="related_products">
    <div class="related_products_title">Сопутствующие товары</div>
    <div class="cont_related_cards">
      <div
        class="card"
        v-for="(el, index) in ItemCardStore.relatedProducts"
        :key="index"
      >
        <RouterLink to="/CardItem" @click="getClickItemHook(el)">
          <img
            class="card_image"
            src="../Main_page/main/assets/acfa6abfb0b4ae9a319c99c4875f3915 4.svg"
            alt="img"
          />
        </RouterLink>
        <div class="card_title">{{ el.name }}</div>
        <div class="price">
          <div class="price_now">От {{ el.price }} р</div>
          <div class="price_before">От {{ el.price + 50 }} р</div>
        </div>
        <div class="button_card">
          <button class="switcher"></button>
          <button class="searching"></button>
          <button></button>
          <button class="in_basket" @click="addInBasket(el, store)">
            В корзину
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.related_products {
  .related_products_title {
    text-align: center;
    margin: 1.5em 0;
    font-size: 72px;
    font-weight: 700;
  }
  .cont_related_cards {
    display: flex;
    justify-content: space-between;
  }
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
