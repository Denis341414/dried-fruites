<script setup>
import { inject, onMounted, ref } from "vue";
import axios from "axios";

import Footer from "../Main_page/footer/Footer.vue";
import HeaderLine from "../Main_page/header/header_line.vue";
import MainFooter from "../Main_page/main/main_footer.vue";
import { RouterLink } from "vue-router";

const defaultWeight = ref(300);
const ItemData = JSON.parse(localStorage.getItem("ItemCard"));
const weight = ref(300);
const price = ref(ItemData.price);
const relatedProducts = ref([]);

function getWeight(event) {
  weight.value = event.target.innerHTML;
  // console.log(weight.value);
  calculatingThePrice(Number(weight.value));
}

function calculatingThePrice(value) {
  price.value = 0;
  price.value = Math.round(ItemData.price * (value / 300));
  // console.log(price.value);
}

onMounted(async () => {
  await axios
    .get(
      `https://7425c7118c450585.mokky.dev/fruites?categories=${ItemData.value["categories"]}`
    )
    .then((res) => {
      relatedProducts.value = res;
    });
});
</script>

<template>
  <HeaderLine />
  <RouterLink to="/" class="back_to_catalog">Вернуться в каталог</RouterLink>
  <h1 class="title">{{ ItemData.name }}</h1>
  <div class="card_container">
    <div class="card_left">
      <img
        class="card_img"
        src="../Main_page/main/assets/acfa6abfb0b4ae9a319c99c4875f3915 4.svg"
        alt=""
      />
      <div class="card_weight">
        <button
          @click="getWeight"
          :class="
            weight == 300
              ? 'weight_btn btn_300 weight_btn_active'
              : 'weight_btn btn_300'
          "
        >
          300
        </button>
        <button
          @click="getWeight"
          :class="
            weight == 500
              ? 'weight_btn btn_500 weight_btn_active'
              : 'weight_btn btn_500'
          "
        >
          500
        </button>
        <button
          @click="getWeight"
          :class="
            weight == 1000
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
      <div class="price">{{ price }}.00р</div>
      <button class="in_basket">В корзину</button>
    </div>
  </div>
  <div class="related_products"></div>
  <MainFooter />
  <Footer />
</template>

<style scoped lang="scss">
.back_to_catalog {
  text-decoration: none;
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
  }
}
</style>
