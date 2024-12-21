import { useItemCardStore } from "../stores/ItemCardStore";

export const calculatingThePrice = (item, val) => {
  useItemCardStore().price = Math.round(item.price * Number(val / 300));
  console.log(useItemCardStore().price);
};
