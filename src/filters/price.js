import { store } from '../utils/localStore.js';
import { get } from '../utils/utils.js';
import { displayStore } from '../utils/displayStore.js';

const maxPriceDOM = get('.max');
const currentPriceDOM = get('.range-value');
const rangeInput = get('#range-input');

const productsContainer = get('.products-section');

const prices = store.map((item) => item.price);

const maxPrice = Math.max(...prices);

rangeInput.max = maxPrice;
rangeInput.value = maxPrice;
rangeInput.min = 0;

maxPriceDOM.textContent = `$${rangeInput.max}`;
currentPriceDOM.textContent = `$${rangeInput.value}`;

rangeInput.addEventListener('input', () => {
  const filterPrice = rangeInput.value;
  let newStore = store.filter((item) => item.price <= filterPrice);
  currentPriceDOM.textContent = `$${rangeInput.value}`;
  if (!newStore.length) {
    productsContainer.innerHTML = '<h2 class="warn">Sorry,no results...</h2>';
    return;
  }
  displayStore(newStore, productsContainer);
});
