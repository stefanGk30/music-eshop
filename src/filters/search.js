import { store } from '../utils/localStore.js';
import { get } from '../utils/utils.js';
import { displayStore } from '../utils/displayStore.js';

const searchForm = get('.search-form');
const input = get('#text-input');
const productsContainer = get('.products-section');

searchForm.addEventListener('keyup', (e) => {
  const value = input.value.trim().toLowerCase();
  let newStore = store.filter((item) => {
    if (
      item.model.toLowerCase().includes(value) ||
      item.company.toLowerCase().includes(value)
    ) {
      return item;
    }
  });
  if (!newStore.length) {
    productsContainer.innerHTML = '<h2 class="warn">Sorry,no results...</h2>';
    return;
  }
  displayStore(newStore, productsContainer);
});
