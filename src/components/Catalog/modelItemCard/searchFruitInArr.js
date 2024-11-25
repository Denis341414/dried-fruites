export const searchFruit = (searchResult, arrDriedFruites, search) => {
  searchResult.value = "";
  arrDriedFruites.value.forEach((element) => {
    if (element["name"].toLowerCase() === search.value.toLowerCase()) {
      searchResult.value = element;
    }
  });
  console.log(searchResult.value);
};
