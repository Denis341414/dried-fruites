<script setup>
import { RouterLink, useRoute } from "vue-router";
import { useItemStore } from "../../../stores/item";
import { callWithAsyncErrorHandling, ref, watch } from "vue";

const route = useRoute();

function switchRoute() {
  event;
}

const store = useItemStore();
</script>

<template>
  <div class="header_line">
    <div class="header_line_left">
      <nav class="header_line_navigation">
        <RouterLink @click="" to="/" :class="'nav_item main'"
          >Главная</RouterLink
        >
        <RouterLink @click="" to="/Catalog" :class="'nav_item catalog'"
          >Каталог</RouterLink
        >
        <RouterLink @click="" to="/aboutUs" :class="'nav_item aboutUs'"
          >О нас</RouterLink
        >
        <RouterLink
          @click=""
          to="/aboutTheDelivery"
          :class="'nav_item aboutTheDelivery'"
          >О доставке</RouterLink
        >
        <RouterLink @click="" to="/ourStores" :class="'nav_item ourStores'"
          >Магазины</RouterLink
        >
        <RouterLink @click="" to="/Contacts" :class="'nav_item Contacts'"
          >Контакты</RouterLink
        >
      </nav>
    </div>

    <div class="header_line_right">
      <div class="favourites">Избранное</div>
      <div class="basket">Корзина</div>
    </div>
  </div>
</template>

<style scoped>
.header_line {
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  margin-bottom: 2em;
}
.header_line_left {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
}
.header_line_navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
}
.nav_item {
  list-style: none;
  color: rgb(197, 185, 185);
  cursor: pointer;
  transition: all 0.15s ease;
  text-decoration: none;
}
.nav_item:hover {
  color: rgba(254, 179, 2, 0.7);
}
.header_line_right {
  display: flex;
  align-items: center;
  gap: 1em;
}
.header_line_right * {
  cursor: pointer;
}
.number_phone:hover {
  font-weight: 900;
}
.number_phone::before {
  content: url(./assets/phone.svg);
  margin-right: 0.3em;
}
.favourites {
  font-weight: 900;
}
.favourites:hover {
  color: rgb(174, 6, 6);
}
.basket {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4em;
  background-color: rgba(254, 179, 2, 0.45);
  width: 150px;
  height: 50px;
  border-radius: 20px;
}
.quantity {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5em;
  background-color: #fff;
  width: 40px;
  height: 40px;
  font-weight: 900;
}
</style>
