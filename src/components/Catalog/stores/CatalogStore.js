import { defineStore } from "pinia";
import { ref } from "vue";
import { localStorageKeys } from "../../../localStorageKeys";

export const useCatalogStore = defineStore("CatalogStore", () => {
  const price =
    JSON.parse(localStorage.getItem(localStorageKeys.ITEM_CARD)).price || ref();
  const weight = ref(300);
  const flagAdded = ref(false);
  const itemData =
    JSON.parse(localStorage.getItem(localStorageKeys.ITEM_CARD)) || ref({});
  const relatedProducts = ref([]);

  return { price, weight, flagAdded, itemData, relatedProducts };
});
