import { useItemCardStore } from "../stores/ItemCardStore";
export const getWeight = (target) => {
  useItemCardStore().weight = Number(target);
};
