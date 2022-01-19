import { getFromLS, setToLS } from './utils.js';

let store = getFromLS('store');

const setStore = (products) => {
  store = products.map((product) => {
    const {
      id,
      info: { company, model },
      price,
      preview: { image },
      usage,
      discount,
      compatibility,
      discountPercentage,
    } = product;

    return {
      id,
      company,
      model,
      price,
      image,
      usage,
      discount,
      compatibility,
      discountPercentage,
    };
  });

  setToLS('store', store);
};

const findProduct = (id) => {
  // const itemID = parseInt(id);
  const item = store.find((product) => product.id === id);
  return item;
};

export { store, setStore, findProduct };
