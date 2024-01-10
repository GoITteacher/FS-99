/*
 * Пошук HTML елементу за допомогою querySelector та querySelectorAll
 * - За назвою тегу
 * - За назвою класу
 * - За ID
 */

// document.getElementsByClassName('item');
// document.getElementsByTagName('h1');
// document.getElementsByName('name');
// const liElem = document.getElementById('test'); // лише на док

/*
 * Властивості «навігації» по DOM-вузлах
 *
 */

// const liElem = document.querySelector('li#test');

// console.log(liElem.parentNode.lastElementChild.previousElementSibling);

// console.log(liElem.children);

// liElem.children[1];

// for (let i = 0; i < liElem.children.length; i++) {
//   console.log(liElem.children[i]);
// }

// console.log(liElem.firstChild);
// console.log(liElem.firstElementChild);

// console.log(liElem.lastChild);
// console.log(liElem.lastElementChild);

// console.dir(liElem.previousSibling);
// console.dir(liElem.previousElementSibling);

// console.dir(liElem.nextSibling);
// console.dir(liElem.nextElementSibling);

// console.log(liElem.parentNode.parentNode.parentNode.parentNode.parentNode);

//=================================

// const btnElem = document.querySelector('.js-magic-btn');
// const btnElem = document.querySelector('[disabled]');
// console.log(btnElem);

// const firstLiElem = document.querySelector('ul>li');
// console.log(firstLiElem);

// const ulElem = document.querySelector('ul'); // null
// console.log(ulElem);

// const liElems = ulElem.querySelectorAll('li'); // []
// console.log(liElems);
// ================================================
// console.log(window);

// window.location.replace('https://www.w3schools.com/cssref/css_selectors.php');

// console.log(document);

/* const dom = {
  html: {
    head: {},
    body: {
      ul: {
        li: {
          textContent: 'About',
        },
      },
    },
  },
};
 */
// dom.html.body.ul.li.div.ul.li.p.textContent = 'Hello World';
