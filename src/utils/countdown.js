import { get } from './utils.js';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const format = (number) => {
  if (number < 10) {
    return `0${number}`;
  }
  return number;
};

const expiration = get('.expiration');

let tempYear = new Date().getFullYear();
let tempMonth = new Date().getMonth();
let tempDate = new Date().getDate();

const futureDate = new Date(tempYear, tempMonth, tempDate + 10, 12, 0);

const year = futureDate.getFullYear();
let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();
let day = futureDate.getDay();
day = weekdays[day];
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

expiration.textContent = `The giveaway expires on ${day}, ${date} ${month} ${year}, ${hours}:${format(
  minutes
)}am`;

const countdown = () => {
  const now = new Date().getTime();
  const t = futureDate - now;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;

  const days = Math.floor(t / oneDay);
  const hours = Math.floor((t % oneDay) / oneHour);
  const mins = Math.floor((t % oneHour) / oneMin);
  const secs = Math.floor((t % oneMin) / 1000);

  const values = [days, hours, mins, secs];

  const containers = document.querySelectorAll('.countdown-container h4');

  containers.forEach((container, i) => {
    container.textContent = format(values[i]);
  });
};

const c = setInterval(countdown, 1000);

countdown();
