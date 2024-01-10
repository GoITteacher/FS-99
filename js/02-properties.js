/*
 * Властивості елемента (hero)
 * - Текст та textContent
 * - Зображення
 * - Style
 * - https://source.unsplash.com/500x500/?random=${id}&eat,bread,dish,meet,egg;
 */

// const heroTitleEl = document.querySelector('.hero__title');
// console.log(heroTitleEl);
// heroTitleEl.textContent = 'Hello World';
// console.log(heroTitleEl.textContent);

// const linkElem = document.querySelector('.js-link');
// console.log(linkElem.textContent);

/*
 * Атрибути
 * - get(ім'я-атрибута)
 * - set(ім'я-атрибута)
 * - remove(ім'я-атрибута)
 * - has(ім'я-атрибута)
 */

// const imageList = document.querySelectorAll('.hero__image');

// console.log(imageList);
// imageList.forEach(imageElem => {
//   const index = imageElem.getAttribute('index');
//   const url = `https://source.unsplash.com/500x500/?random=${index}&eat,bread,dish,meet,egg`;
//   imageElem.setAttribute('src', url);
// });

// const imageElem = document.querySelector('[data-image]');

// if (imageElem.hasAttribute('disabled')) {
//   console.log('Картинка не працює');
// } else {
//   console.log('Work');
// }
// console.log(); // false true

/*
 * Data-атрибути
 */

// const images = document.querySelectorAll('img');

// images.forEach((image, i) => {
//   const tags = image.dataset.tags;
//   const url = `https://source.unsplash.com/500x500/?random=${i}&${tags}`;
//   image.setAttribute('src', url);
// });
// const actions = document.querySelectorAll('.actions button');

/*
 * Style
 */

// const liElems = document.querySelectorAll('li');

// liElems.forEach((elem, i) => {
//   elem.style.backgroundColor = 'red';
//   elem.style.border = '1px solid black';
//   elem.style.borderRadius = '10px';
//   elem.style.width = `${30 + i * 10}px`;
// });
