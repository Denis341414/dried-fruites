import { getCategories } from "../../../api/model/getCategories";

export const getRelatedProducts = (categories, arrRelProd) => {
  for (let i = 0; i < getCategories(categories).length || i < 4; i++) {
    arrRelProd.push(getCategories(categories)[i]);
  }
};
