import { defineStore } from "pinia";
import { ref } from "vue";
import { APIClient } from "../../../../api/ApiClient";

export const useStoreMain = defineStore("StoreMain", () => {
  const fruitesMassiv = APIClient.getRes;

  return { fruitesMassiv };
});
