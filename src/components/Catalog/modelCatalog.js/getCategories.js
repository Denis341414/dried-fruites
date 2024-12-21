export const getCategories = (event, categories) => {
  categories.value = event.target.innerText.toLowerCase();
  console.log(categories.value);
};
