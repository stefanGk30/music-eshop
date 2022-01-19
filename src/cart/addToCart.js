import { get, setToLS, getFromLS } from '../utils/utils.js';

import { findProduct } from '../utils/localStore.js';
import { addToCartDOM } from './addToCartDOM.js';

const cartWrapper = get('.cart-wrapper');
const navCartCount = get('.item-count');
const totalPriceDOM = get('.total-price');
const cartDOM = get('.cart-items');
let cart = getFromLS('cart');

export const addToCart = (id) => {
  const itemID = parseInt(id);
  let cartItem = cart.find((item) => item.id === itemID);

  if (!cartItem) {
    let product = findProduct(itemID);
    product = { ...product, amount: 1 };
    cart = [...cart, product];
    addToCartDOM(product);
  } else {
    const amount = incAmount(itemID);
    const allCartItems = [...document.querySelectorAll('.cart-item')];
    const newItem = allCartItems.find((item) => item.dataset.id === id);
    const itemAmount = newItem.querySelector('.amount');
    itemAmount.textContent = amount;
  }

  setToLS('cart', cart);
  checkDiscount();
  updateDOM();
  updatePrice();
  cartWrapper.classList.add('show-cart');
};

const incAmount = (id) => {
  let newAmount;
  cart = cart.map((item) => {
    if (item.id === id) {
      newAmount = item.amount + 1;
      item = { ...item, amount: newAmount };
    }
    return item;
  });
  return newAmount;
};

const decAmount = (id) => {
  let newAmount;
  cart = cart.map((item) => {
    if (item.id === id) {
      newAmount = item.amount - 1;
      item = { ...item, amount: newAmount };
    }
    return item;
  });
  return newAmount;
};

const removeItem = (id) => {
  cart = cart.filter((item) => item.id !== id);
};

const setCartDOM = () => {
  cart.forEach((item) => {
    addToCartDOM(item);
  });
};

const updatePrice = () => {
  const price = cart.reduce((acc, curr) => {
    acc += curr.price * curr.amount;
    return acc;
  }, 0);
  totalPriceDOM.textContent = price;
};

const updateDOM = () => {
  const total = cart.reduce((acc, curr) => {
    acc += curr.amount;
    return acc;
  }, 0);
  navCartCount.textContent = total;
};

const checkDiscount = () => {
  cart = cart.map((item) => {
    if (item.discount) {
      const { price, discountPercentage } = item;
      item = { ...item, price: price - (price * discountPercentage) / 100 };
    }
    return item;
  });
};

const cartFunctionality = () => {
  cartDOM.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-btn')) {
      const element = e.target.parentElement.parentElement;
      const id = parseInt(element.dataset.id);
      removeItem(id);
      element.remove();
    }

    if (e.target.parentElement.classList.contains('inc-amount')) {
      const element = e.target.parentElement.parentElement.parentElement;
      const id = parseInt(element.dataset.id);
      const amount = incAmount(id);
      element.querySelector('.amount').textContent = amount;
    }

    if (e.target.parentElement.classList.contains('dec-amount')) {
      const element = e.target.parentElement.parentElement.parentElement;
      const id = parseInt(element.dataset.id);
      const amount = decAmount(id);
      if (amount <= 0) {
        removeItem(id);
        element.remove();
      }
      element.querySelector('.amount').textContent = amount;
    }

    updateDOM();
    updatePrice();
    setToLS('cart', cart);
  });
};

const init = () => {
  setCartDOM();
  updateDOM();
  updatePrice();
  cartFunctionality();
};

init();