import { defineStore } from "pinia";
import { ref } from "vue";

export const useCatalogStore = defineStore("CatalogStore", () => {
  const categories =
    JSON.parse(localStorage.getItem("ItemCard")).categories[0] || ref();

  return { categories };
});
