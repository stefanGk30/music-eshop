import '../cart/toggleCart.js';
import '../utils/toggleSide.js';
import company from '../filters/company.js';
import price from '../filters/price.js';
import search from '../filters/search.js';
import { store, setStore } from '../utils/localStore.js';
import { displayStore } from '../utils/displayStore.js';
import { get } from '../utils/utils.js';
import { fetchData } from '../utils/fetchProducts.js';

const productsContainer = get('.products-section');

window.addEventListener('DOMContentLoaded', async () => {
  if (store.length === 0) {
    const products = await fetchData();
    if (products) {
      setStore(products);
    }
  }
  displayStore(store, productsContainer);
  company();
  price();
  search();
});
