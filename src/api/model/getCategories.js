import { API_URL } from "./ApiUrl";
import axios from "axios";

export const getCategories = async (category) => {
  try {
    axios
      .get(`${API_URL.API_CATEGORIES_URL}${category}`)
      .then((res) => {
        res.data;
      })
      .then((data) => {
        return data;
      });
  } catch (error) {
    console.log(error);
  }
};
