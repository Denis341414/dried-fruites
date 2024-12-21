export function addInBasket(el, store) {
  store.ItemsInBasket.push(el);
  console.log(store.ItemsInBasket);
  // addedInBasket(el.id, "dont_basket");
}
