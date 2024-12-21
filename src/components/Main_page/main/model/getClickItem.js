import { localStorageKeys } from "../../../../localStorageKeys";
import { useItemCardStore } from "../../../Catalog/stores/ItemCardStore";

const key = localStorageKeys.ITEM_CARD;

export function getClickItem(element) {
  if (localStorage.getItem(key)) {
    localStorage.removeItem(key);
    localStorage.setItem(key, JSON.stringify(element));
    useItemCardStore().price = element.price;
    useItemCardStore().itemData = element;
  } else {
    localStorage.setItem(key, JSON.stringify(element));
  }
}
