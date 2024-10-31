<script setup>
import HeaderLine from "../Main_page/header/header_line.vue";
</script>

<template>
  <HeaderLine />
  <div class="container">
    <h1 class="title">Оформление заказа</h1>
    <div class="cont_basket">
      <div class="inputs_basket">
        <input
          class="item_input"
          placeholder="Иванов Иван Иванович"
          type="text"
        />
        <input
          class="item_input"
          placeholder="+7 (911) 111-11-11  "
          type="text"
        />
        <input class="item_input" placeholder="E-mail@mail.ru" type="text" />
        <input
          class="item_input"
          placeholder="Наличными при получении"
          type="text"
        />
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
            <div class="item">
              <div class="name">rrrr</div>
              <div class="weight">400</div>
              <div class="price">2222</div>
            </div>
            <div class="item">
              <div class="name">rrrr</div>
              <div class="weight">400</div>
              <div class="price">2222</div>
            </div>
          </div>
        </div>
        <div class="result_price">
          <p class="total_text">Итого:</p>
          <div class="total_price">222</div>
        </div>
        <button class="buy">Заказать</button>
      </div>
    </div>
  </div>
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
    }
  }

  .result {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2em;

    .result_order {
      background-color: rgb(217, 216, 216);
      width: 27em;
      min-height: 19em;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1em;
      padding: 1em;

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
    }
    .buy:hover {
      color: black;
      background-color: rgb(255, 210, 107);
    }
  }
}
</style>
