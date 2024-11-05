<script setup>
import Header from "./header/Header.vue";
import Main from "./main/main.vue";
import Footer from "./footer/Footer.vue";
import { inject, onMounted } from "vue";

onMounted(inject("scrollTo"));
</script>

<template>
  <Header />
  <Main />
  <Footer />
</template>

<style></style>
