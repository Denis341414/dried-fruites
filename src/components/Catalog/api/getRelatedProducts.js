import { getCategories } from "../../../api/model/getCategories";

export const getRelatedProducts = (categories, arrRelProd) => {
  arrRelProd = [];
  for (let i = 0; i < getCategories(categories[0]).length || i < 4; i++) {
    arrRelProd.push(getCategories(categories)[i]);
  }
};
