import { useCatalogStore } from "../stores/CatalogStore";

export const calculatingThePrice = (item, val) => {
  useCatalogStore().price = Math.round(item.price * Number(val / 300));
  console.log(useCatalogStore().price);
};
