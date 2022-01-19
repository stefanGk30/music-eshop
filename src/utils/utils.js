export const get = (selection) => {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw new Error('check selection: ' + selection);
  }
};

export const setToLS = (name, item) => {
  localStorage.setItem(name, JSON.stringify(item));
};
export const getFromLS = (selection) => {
  let item = localStorage.getItem(selection);
  item ? (item = JSON.parse(localStorage.getItem(selection))) : (item = []);
  return item;
};
