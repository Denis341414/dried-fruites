import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useItemStore = defineStore("ItemsStore", () => {
  const ItemsInBasket = ref([]);
  const basket = computed(() => {
    return ItemsInBasket.value.length;
  });

  return {
    basket,
    ItemsInBasket,
  };
});
