import { get } from './utils.js';

const img = get('.single-img');
const companyTitle = get('.single-info h2');
const modelTitle = get('.model');
const compatible = get('.compatible-span');
const usageTitle = get('.usage-span');
const oldPrice = get('.old-price');
const priceTitle = get('.new-price');

export const displayProduct = (product) => {
  const {
    company,
    model,
    image,
    price,
    compatibility,
    usage,
    discount,
    discountPercentage,
  } = product;

  img.src = image;
  companyTitle.textContent = company;
  modelTitle.textContent = model;
  compatible.textContent = compatibility;
  usageTitle.textContent = usage.map((item) => item).join(', ');
  oldPrice.classList.add(`${discount ? 'show' : 'hide'}`);
  oldPrice.textContent = `${discount ? `$${price}` : ''}`;
  priceTitle.textContent = `$${
    discount ? price - (price * discountPercentage) / 100 : price
  }`;
};
