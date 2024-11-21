import { API_URL } from "./ApiUrl";
import axios from "axios";

export const getItem = async (element) => {
  try {
    axios
      .get(`${API_URL.API_ITEM_URL}${element}`)
      .then((res) => res.data)
      .then((data) => {
        if (data.length !== 0) {
          return data;
        } else {
          console.log("Нет такого товара");
        }
      });
  } catch (error) {
    console.error("API GET Error:", error);
    throw error;
  }
};
