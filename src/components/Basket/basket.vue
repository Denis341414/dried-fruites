<script setup>
import HeaderLine from "../Main_page/header/header_line.vue";
import related_Products from "../Catalog/related_Products.vue";
import Footer from "../Main_page/footer/Footer.vue";

import { onMounted, ref, watch, inject } from "vue";
import { useItemStore } from "../../stores/item";

const store = useItemStore();
const ItemsInBasket = store.ItemsInBasket;
const allPrice = ref(0);

console.log(ItemsInBasket);

function countingAllPrice() {
  for (let i of ItemsInBasket) {
    console.log(typeof i["price"]);
    allPrice.value += Number(i["price"]);
  }
}

onMounted(countingAllPrice);
onMounted(inject("scrollTo"));
</script>

<template>
  <HeaderLine />
  <div class="container">
    <h1 class="title">Оформление заказа</h1>
    <div class="cont_basket">
      <div class="inputs_basket">
        <label for="item_input">Ваше имя</label>
        <input
          class="item_input"
          placeholder="Иванов Иван Иванович"
          type="text"
        />
        <label for="item_input">Ваш телефон</label>
        <input
          class="item_input"
          placeholder="+7 (911) 111-11-11  "
          type="text"
        />
        <label for="item_input">Ваш email</label>
        <input class="item_input" placeholder="E-mail@mail.ru" type="text" />
        <label for="">Способ оплаты</label>
        <input
          class="item_input"
          placeholder="Наличными при получении"
          type="text"
        />
        <label for="item_input">Пункт Выдачи</label>
        <input
          class="item_input"
          placeholder="СПб, Ул. Ефимова, д. 2, ТЦ “ПИК”"
          type="text"
        />
      </div>
      <div class="result">
        <div class="result_order">
          <h3 class="result_order_title">Ваш заказ</h3>
          <div class="order_items">
            <div class="item" v-for="(el, index) in ItemsInBasket">
              <div class="name">{{ el.name }}</div>
              <div class="weight">300</div>
              <div class="price">{{ el.price }}р</div>
            </div>
          </div>
        </div>
        <div class="result_price">
          <p class="total_text">Итого:</p>
          <div class="total_price">{{ allPrice }}р</div>
        </div>
        <button class="buy">Заказать</button>
      </div>
    </div>
  </div>

  <related_Products />
  <Footer />
</template>

<style lang="scss" scoped>
.title {
  text-align: center;
  margin: 1em;
  font-size: 72px;
}

.cont_basket {
  display: flex;
  justify-content: space-around;

  .inputs_basket {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .item_input {
      width: 23em;
      height: 2.5em;
      border: 1px solid gray;
      border-radius: 0.5em;
      padding: 2px 10px;
      box-shadow: 0 0 10px rgb(211, 210, 210);
    }
  }

  .result {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2em;

    .result_order {
      background-color: rgb(243, 243, 243);
      border-radius: 1.5em;
      width: 27em;
      height: 23em;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1em;
      padding: 1.5em;
      overflow-y: scroll;
      overflow-x: hidden;

      .result_order_title {
        font-size: 22px;
      }
      .order_items {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: inherit;
        gap: 1em;
        .item {
          display: flex;
          justify-content: space-around;
          border-bottom: 1px black solid;
          width: 21em;
          padding: 0.3em;
        }
      }
    }

    .result_price {
      display: flex;
      gap: 10em;
      align-items: center;

      .total_text,
      .total_price {
        font-size: 36px;
        font-weight: 700;
      }
      .total_price {
        color: rgba(254, 179, 2, 1);
      }
    }

    .buy {
      width: 15em;
      height: 2em;
      border-radius: 2em;
      border: none;
      background-color: rgba(254, 179, 2, 1);
      color: #fff;
      font-size: 24px;
      font-weight: 700;
      transition: all 0.3s ease;
    }
    .buy:hover {
      color: black;
      background-color: rgb(255, 210, 107);
    }
  }
}
</style>
