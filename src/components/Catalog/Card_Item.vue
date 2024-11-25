<script setup>
import { onMounted, ref, inject } from "vue";
import axios from "axios";
import { RouterLink } from "vue-router";
import { localStorageKeys } from "../../localStorageKeys";
import { useItemStore } from "../../stores/item";
import { getWeight } from "./modelItemCard/getWeight";
import { calculatingThePrice } from "./modelItemCard/calculatingThePrice";
import { useCatalogStore } from "./stores/CatalogStore";
import { addInBasket } from "./modelItemCard/addInBasket";
import { getRelatedProducts } from "./api/getRelatedProducts";

import Footer from "../Main_page/footer/Footer.vue";
import HeaderLine from "../Main_page/header/header_line.vue";
import MainFooter from "../Main_page/main/main_footer.vue";
import related_Products from "./related_Products.vue";

const catalogStore = useCatalogStore();

onMounted(async () => {
  getRelatedProducts(
    catalogStore.itemData.categories[0],
    catalogStore.relatedProducts
  );
});
onMounted(inject("scrollTo"));
</script>

<template>
  <HeaderLine />
  <RouterLink to="/" class="back_to_catalog">На главную</RouterLink>
  <h1 class="title">{{ catalogStore.itemData.name }}</h1>
  <div class="card_container">
    <div class="card_left">
      <img
        class="card_img"
        src="../Main_page/main/assets/acfa6abfb0b4ae9a319c99c4875f3915 4.svg"
        alt=""
      />
      <div class="card_weight">
        <button
          @click="
            getWeight($event.target.textContent);
            calculatingThePrice(catalogStore.itemData, catalogStore.weight);
          "
          :class="
            catalogStore.weight == 300
              ? 'weight_btn btn_300 weight_btn_active'
              : 'weight_btn btn_300'
          "
        >
          300
        </button>
        <button
          @click="
            getWeight($event.target.textContent);
            calculatingThePrice(catalogStore.itemData, catalogStore.weight);
          "
          :class="
            catalogStore.weight == 500
              ? 'weight_btn btn_500 weight_btn_active'
              : 'weight_btn btn_500'
          "
        >
          500
        </button>
        <button
          @click="
            getWeight($event.target.textContent);
            calculatingThePrice(catalogStore.itemData, catalogStore.weight);
          "
          :class="
            catalogStore.weight == 1000
              ? 'weight_btn btn_1000 weight_btn_active'
              : 'weight_btn btn_1000'
          "
        >
          1000
        </button>
      </div>
    </div>
    <div class="card_right">
      <div class="subtext">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quis esse
        inventore labore, at excepturi impedit, vero omnis perferendis ipsum
        voluptas suscipit repudiandae adipisci rerum, quidem commodi et hic!
        Placeat!
      </div>
      <div class="price">{{ catalogStore.price }}.00р</div>
      <button
        v-if="!useCatalogStore.flagAdded"
        @click="addInBasket"
        class="in_basket"
      >
        В корзину
      </button>
      <button
        v-else
        @click="
          addInBasket(
            catalogStore.itemData,
            catalogStore.price,
            catalogStore.weight
          )
        "
        class="tr_basket"
      >
        В корзине
      </button>
    </div>
  </div>
  <related_Products />
  <MainFooter />
  <Footer />
</template>

<style scoped lang="scss">
.back_to_catalog {
  text-decoration: none;
  color: black;
  font-weight: 700;
  font-size: 1.3em;
  border: 3px solid rgb(255, 221, 0);
  padding: 0.5em;
  border-radius: 2em;
}
.back_to_catalog:hover {
  background-color: rgb(255, 221, 0);
  color: #fff;
  box-shadow: 1px 1px 10px rgb(176, 176, 176);
}
.title {
  text-align: center;
  margin: 1em 0;
}
.card_container {
  display: flex;
  gap: 5em;
  margin-bottom: 7em;

  .card_left {
    display: flex;
    flex-direction: column;
    gap: 3em;

    .card_img {
      border-radius: 2em;
    }
    .card_weight {
      display: flex;
      align-items: center;
      justify-content: center;

      .weight_btn {
        border: none;
        height: 3em;
        width: 10em;
        background-color: #f4f4f4;
      }
      .weight_btn:hover {
        background-color: rgb(254, 225, 155);
      }
      .btn_300 {
        border-radius: 2em 0 0 2em;
      }
      .btn_1000 {
        border-radius: 0 2em 2em 0;
      }
      .weight_btn_active {
        background-color: rgb(247, 173, 0);
      }
    }
  }
  .card_right {
    .subtext {
      font-size: 22px;
      margin-bottom: 10em;
    }
    .price {
      margin-bottom: 1.4em;
      font-size: 48px;
      color: rgba(218, 92, 92, 1);
    }
    .in_basket {
      background-color: rgba(254, 179, 2, 1);
      border: none;
      font-size: 24px;
      color: #fff;
      width: 10em;
      height: 2em;
      border-radius: 0.5em;
    }
    .tr_basket {
      background-color: rgb(39, 39, 39);
      border: none;
      font-size: 24px;
      color: #fff;
      width: 10em;
      height: 2em;
      border-radius: 0.5em;
    }
  }
}

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
