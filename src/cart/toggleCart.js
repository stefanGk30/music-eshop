import { get } from '../utils/utils.js';

const cart = get('.cart-wrapper');
const cartBtn = get('.cart-btn');
const closeCart = get('.close-cart');

cartBtn.addEventListener('click', () => {
  cart.classList.toggle('show-cart');
});

closeCart.addEventListener('click', () => {
  cart.classList.remove('show-cart');
});

cart.addEventListener('click', (e) => {
  if (e.target.classList.contains('cart-wrapper')) {
    cart.classList.remove('show-cart');
  }
});
