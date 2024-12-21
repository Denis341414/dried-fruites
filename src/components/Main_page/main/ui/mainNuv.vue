<script setup>
import { keysMain } from "../keys/keysMain";
</script>

<template>
  <div class="main_nav">
    <button v-for="(element, index) in keysMain.masButtons" :key="index">
      {{ element }}
    </button>
  </div>
</template>

<style scoped>
.main_nav {
  display: flex;
  gap: 3em;
}
.main_nav_item {
  list-style: none;
  font-size: 18px;
  border: none;
  background: green;
  padding: 13px;
  border-radius: 15px;
}
.main_nav_item_active {
  list-style: none;
  font-size: 18px;
  border: none;
  background: rgba(254, 179, 2, 1);
  border-radius: 15px;
  color: #fff;
  padding: 13px;
}
</style>
