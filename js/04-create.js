/*
 * Створення та додавання елементів
 */

const div = document.querySelector('.js-hero');

/* for (let i = 0; i < 10; i++) {
  const myElem = document.createElement('h1');
  myElem.textContent = 'Hello World - ' + i;
  myElem.classList.add('active-link');
  myElem.style.backgroundColor = 'gold';

  div.append(myElem);
} */

// const arr = [];

// for (let i = 0; i < 10; i++) {
//   const myElem = document.createElement('img');
//   myElem.setAttribute(
//     'src',
//     `https://source.unsplash.com/500x500/?random=${i}&user,avatar,portret`,
//   );
//   arr.push(myElem);
// }
// div.append(...arr);

/*
 * Створюємо заголовок
 */
const titleEl = document.createElement('h1');

/*
 * Створюємо зображення
 * https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg
 * valais-alpine-mountains-glacier
 */
const imageEl = document.createElement('img');

const heroEl = document.querySelector('.hero');

/*
 * Створюємо та додаємо новий пункт меню
 */
const navItemEl = document.createElement('li');

//=====================================
