import '../cart/toggleCart.js';
import '../utils/toggleSide.js';
import '../cart/addToCart.js';
import { addToCart } from '../cart/addToCart.js';
import { displayProduct } from '../utils/displayProduct.js';
import { findProduct } from '../utils/localStore.js';
import { get } from '../utils/utils.js';

const loading = get('.loading-container');

const init = () => {
  const localId = localStorage.getItem('id');
  if (!localId) {
    window.location.replace('index.html');
    return;
  }

  const id = parseInt(localId);
  const product = findProduct(id);
  displayProduct(product);

  const addBtn = get('.add-single');
  addBtn.addEventListener('click', () => {
    addToCart(localId);
  });
};

window.addEventListener('DOMContentLoaded', init);

window.addEventListener('load', () => {
  loading.classList.add('hide-loading');
});
