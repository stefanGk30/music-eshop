import '../cart/toggleCart.js';
import '../utils/toggleSide.js';
import '../filters/company.js';
import '../filters/price.js';
import '../filters/search.js';
import { store } from '../utils/localStore.js';
import { displayStore } from '../utils/displayStore.js';
import { get } from '../utils/utils.js';

const productsContainer = get('.products-section');
displayStore(store, productsContainer);
