import { get } from './utils.js';

const sidebar = get('.mobile-wrapper');
const barsBtn = get('.mobile-btn');
const closeBtn = get('.close-mobile');

barsBtn.addEventListener('click', () => {
  sidebar.classList.add('show-mobile');
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('show-mobile');
});
