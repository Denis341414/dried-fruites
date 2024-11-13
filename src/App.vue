<script setup>
import { RouterLink, RouterView } from "vue-router";
import Main_page from "./components/Main_page/Main_page.vue";
import { provide, Transition } from "vue";

provide("scrollTo", () => {
  window.scrollTo(0, 0);
});
</script>

<template>
  <router-view> </router-view>
</template>

<style></style>
