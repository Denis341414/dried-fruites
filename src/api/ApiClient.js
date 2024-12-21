import { getItem } from "./model/getItem";
import { getRes } from "./model/getRes";

export const APIClient = {
  getRes: await getRes(),
  getItem,
};
