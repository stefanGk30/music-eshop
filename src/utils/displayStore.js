import { addToCart } from '../cart/addToCart.js';

export const displayStore = (store, container) => {
  container.innerHTML = store
    .map((item) => {
      return `       <div class="product" data-id="${item.id}">
          <div class="product-img">
            <img src="${item.image}" alt="" />
          </div>
          <div class="product-info">
            <h3>${item.company} ${item.model}</h3>
            <p>
              <span class="old-price">${
                item.discount ? `$${item.price} ` : ''
              }</span>
              <span class="new-price"> ${
                item.discount
                  ? `$${
                      item.price - (item.price * item.discountPercentage) / 100
                    }`
                  : ` $${item.price}`
              }    </span>
            </p>
          </div>
          <div class="product-control">
            <a href="../product.html" data-id="${
              item.id
            }" class="product-control-btn product-link">Details</a>
            <button class="add-btn product-control-btn" data-id="${
              item.id
            }">Add to cart</button>
          </div>
        </div>`;
    })
    .join('');

  const btns = container.querySelectorAll('.add-btn');
  const links = container.querySelectorAll('.product-link');

  links.forEach((link) => {
    link.addEventListener('click', () => {
      const id = link.dataset.id;
      localStorage.setItem('id', id);
    });
  });

  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      addToCart(id);
    });
  });
};
