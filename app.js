import './src/utils/countdown.js';
import './src/cart/toggleCart.js';
import './src/utils/toggleSide.js';
import './src/cart/addToCart.js';

import { setStore } from './src/utils/localStore.js';
import { fetchData } from './src/utils/fetchProducts.js';
import { get } from './src/utils/utils.js';
import { store } from './src/utils/localStore.js';
import { displayStore } from './src/utils/displayStore.js';

const offers = get('.offers');

const init = async () => {
  const products = await fetchData();
  if (products) {
    setStore(products);
  }
  const discountStore = store.filter((item) => item.discount);
  displayStore(discountStore, offers);
};

window.addEventListener('DOMContentLoaded', init);
