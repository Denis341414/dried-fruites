export async function addInFavorite(element) {
  try {
    element.active = !element.active;
    if (element.active == true) {
      localStorage.setItem(element["name"], JSON.stringify(element));
      await axios.post(
        "https://7425c7118c450585.mokky.dev/favorites",
        JSON.parse(localStorage.getItem(element["name"]))
      );
    }
  } catch (error) {
    console.log(error);
  }
}
