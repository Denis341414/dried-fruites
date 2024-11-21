import axios from "axios";
import { API_URL } from "./ApiUrl";

export async function getRes() {
  try {
    const response = await axios.get(API_URL.API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error("API GET Error:", error);
    throw error;
  }
}
