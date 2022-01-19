import { store } from '../utils/localStore.js';
import { get } from '../utils/utils.js';
import { displayStore } from '../utils/displayStore.js';

const btnsContainer = get('.companies-filter');
const productsContainer = get('.products-section');

const companies = ['all', ...new Set(store.map((item) => item.company))];

btnsContainer.innerHTML = companies
  .map((company) => {
    return `<button class="company-btn ${
      company === 'all' ? 'active' : null
    }">${company}</button>`;
  })
  .join('');

const btns = btnsContainer.querySelectorAll('.company-btn');

btnsContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('company-btn')) {
    const companyFilter = e.target.textContent;
    let newStore = store.filter((item) => item.company === companyFilter);

    if (companyFilter === 'all') {
      displayStore(store, productsContainer);
    } else {
      displayStore(newStore, productsContainer);
    }

    btns.forEach((btn) => btn.classList.remove('active'));
    e.target.classList.add('active');
  }
});
