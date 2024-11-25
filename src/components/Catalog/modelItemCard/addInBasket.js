import { useItemStore } from "../../../stores/item";
import { useCatalogStore } from "../stores/CatalogStore";

const element = {};

export const addInBasket = (ItemData, price, weight) => {
  element["name"] = ItemData.name;
  element["price"] = price;
  element["weight"] = weight;
  element["categories"] = ItemData.categories;
  element["active"] = !ItemData.active;
  element["id"] = ItemData.id;
  useCatalogStore().flagAdded = !useCatalogStore().flagAdded;
  useItemStore().ItemsInBasket.push(element);
};
