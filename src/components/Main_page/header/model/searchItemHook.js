import { APIClient } from "../../../../api/ApiClient";
import { localStorageKeys } from "../../../../localStorageKeys";

export const searchItem = async (item, search, router) => {
  item = APIClient.getItem;
  console.log(item);
  search = "";
  router.push("/CardItem");
};
