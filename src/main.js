import { createApp, provide } from "vue";
import { createWebHashHistory, createRouter } from "vue-router";
import { createPinia } from "pinia";
import { watch } from "vue";
import AboutUs from "./components/About_us/AboutUs.vue";
import Main from "./components/Main_page/Main_page.vue";
import About_the_delivery from "./components/About_the_delivery/About_the_delivery.vue";
import Our_stores from "./components/Our_stores/Our_stores.vue";
import Favorites from "./components/Favorites/Favorites.vue";
import Contacts from "./components/Сontacts/Сontacts.vue";
import Catalog from "./components/Catalog/Catalog.vue";
import Card_Item from "./components/Catalog/Card_Item.vue";
import Basket from "./components/Basket/basket.vue";

import "./ALL.css";
import App from "./App.vue";

const router = createRouter({
  routes: [
    {
      path: "/",
      name: "Главная",
      component: Main,
    },
    {
      path: "/aboutUs",
      name: "О нас",
      component: AboutUs,
    },
    {
      path: "/aboutTheDelivery",
      name: "dd",
      component: About_the_delivery,
    },
    {
      path: "/ourStores",
      name: "Наши магазины",
      component: Our_stores,
    },
    {
      path: "/Contacts",
      name: "Контакты",
      component: Contacts,
    },
    {
      path: "/Catalog",
      name: "Каталог",
      component: Catalog,
    },
    {
      path: "/CardItem",
      name: "Карточка",
      component: Card_Item,
    },
    {
      path: "/Basket",
      name: "Корзина",
      component: Basket,
    },
    {
      path: "/Favorites",
      name: "Избранное",
      component: Favorites,
    },
  ],
  history: createWebHashHistory(),
});

const app = createApp(App).use(createPinia()).use(router).mount("#app");
