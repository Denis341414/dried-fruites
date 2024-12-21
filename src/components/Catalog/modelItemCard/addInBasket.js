import { useItemStore } from "../../../stores/item";
import { useItemCardStore } from "../stores/ItemCardStore";

const element = {};

export const addInBasket = (ItemData, price, weight) => {
  element["name"] = ItemData.name;
  element["price"] = price;
  element["weight"] = weight;
  element["categories"] = ItemData.categories;
  element["active"] = !ItemData.active;
  element["id"] = ItemData.id;
  useItemCardStore().flagAdded = !useItemCardStore().flagAdded;
  useItemStore().ItemsInBasket.push(element);
};
