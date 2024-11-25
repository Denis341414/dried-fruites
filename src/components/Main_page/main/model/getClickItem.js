import { localStorageKeys } from "../../../../localStorageKeys";
import { useCatalogStore } from "../../../Catalog/stores/CatalogStore";

const key = localStorageKeys.ITEM_CARD;

export function getClickItem(element) {
  if (localStorage.getItem(key)) {
    localStorage.removeItem(key);
    localStorage.setItem(key, JSON.stringify(element));
    useCatalogStore().price = element.price;
    useCatalogStore().itemData = element;
  } else {
    localStorage.setItem(key, JSON.stringify(element));
  }
}
