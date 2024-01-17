/*
 * Спливання подій
 * event.target - цільовий (вихідний) елемент
 * event.currentTarget - поточний елемент, на слухачі якого спіймали подію
 * event.stopPropagation
 * event.stopImmediatePropagation
 */

const parent = document.querySelector('#parent');
const child = document.querySelector('#child');
const innerChild = document.querySelector('#inner-child');

innerChild.addEventListener('click', e => {
  e.stopImmediatePropagation();
  console.log('INNER CHILD 1');
});

innerChild.addEventListener('click', e => {
  console.log('INNER CHILD 2');
});

innerChild.addEventListener('click', e => {
  console.log('INNER CHILD 3');
});

child.addEventListener('click', e => {
  console.log(e.currentTarget);
});

parent.addEventListener('click', e => {
  console.log(e.currentTarget);
});
