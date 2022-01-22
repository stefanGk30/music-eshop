import { get } from '../utils/utils.js';

const cartDOM = get('.cart-items');

const addToCartDOM = ({
  id,
  company,
  model,
  price,
  newPrice,
  image,
  amount,
  discount,
}) => {
  cartDOM.innerHTML += `
              <li class="cart-item" data-id="${id}">
            <img src="${image}" class="cart-item-img" alt="" />
            <div class="cart-item-info">
              <h5>${company} ${model}</h5>
              <p class="cart-item-price">${
                discount ? `$${newPrice}` : ` $${price}`
              }    </p>
              <button class="remove-btn">remove</button>
            </div>
            <div class="cart-item-amount">
              <button class="inc-amount"><i class="fas fa-plus"></i></button>
              <p class="amount">${amount}</p>
              <button class="dec-amount"><i class="fas fa-minus"></i></button>
            </div>
          </li>
    `;
};

export { addToCartDOM };
