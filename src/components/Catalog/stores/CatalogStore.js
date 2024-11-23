import { defineStore } from "pinia";
import { ref } from "vue";
import { localStorageKeys } from "../../../localStorageKeys";

export const useCatalogStore = defineStore("CatalogStore", () => {
  const price = ref(
    JSON.parse(localStorage.getItem(localStorageKeys.ITEM_CARD)).price
  );
  const weight = ref(300);

  return { price, weight };
});
