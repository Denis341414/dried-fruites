import { useCatalogStore } from "../stores/CatalogStore";
export const getWeight = (target) => {
  useCatalogStore().weight = Number(target);
};
