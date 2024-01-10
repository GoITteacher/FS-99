/*
 * Інтерфейс classList
 * - add
 * - remove
 * - toggle
 * - replace
 * - contains
 */

/* 
const liElems = document.querySelectorAll('li');

  liElems.forEach((el, i) => {
    if (i % 2 === 0) {
      el.classList.add('active-link');
    }
  });
*/

const btn = document.querySelector('button');

const li = document.querySelector('li');

btn.addEventListener('click', () => {
  // li.classList.add('active-link', 'box');
  // li.classList.remove('active-link', 'box');
  // li.classList.toggle('active-link');
  // li.classList.replace('active-link', 'box');
  // if (li.classList.contains('active-link')) {
  //   console.log('Hello');
  // } else {
  //   console.log('Bye');
  // }
});

// console.log(li.classList.contains('active-link')); //false
