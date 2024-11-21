import { localStorageKeys } from "../../../../localStorageKeys";

const key = localStorageKeys.ITEM_CARD;

export function getClickItem(element) {
  if (localStorage.getItem(key)) {
    localStorage.removeItem(key);
    localStorage.setItem(key, JSON.stringify(element));
  } else {
    localStorage.setItem(key, JSON.stringify(element));
  }
}
