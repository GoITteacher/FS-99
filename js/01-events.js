/**
 * Подія сlick
 *
 * Натискаючи на кнопку "Click me" змусь
 * червоний квадратик зміщуватись на 50px по діагоналі
 */

// const btnElem = document.querySelector('.js-click');
/* const box = document.querySelector('.js-box');
box.style.position = 'absolute';

let x = 100;
let y = 100;

btnElem.addEventListener('click', onButtonClick);

function onButtonClick() {
  x = Math.round(Math.random() * 500);
  y = Math.round(Math.random() * 500);
  box.style.left = x + 'px';
  box.style.top = y + 'px';
} */

/* 
    handleObjectEvent - handleButtonClick
    objectEventHandler - buttonClickHandler
    onObjectEvent - onButtonClick
*/

/* const btnElem = document.querySelector('.js-click');
const addBtnElem = document.querySelector('.js-btn-add');
const removeBtnElem = document.querySelector('.js-btn-remove');

addBtnElem.addEventListener('click', onAddBtnClick);
removeBtnElem.addEventListener('click', onRemoveBtnClick);

function onAddBtnClick() {
  console.log('Add Listener');
  btnElem.addEventListener('click', onBtnClick);
}

function onRemoveBtnClick() {
  console.log('Remove Lister');
  btnElem.removeEventListener('click', onBtnClick);
}

function onBtnClick() {
  console.log('Test');
} */

// ===================

const btnElem = document.querySelector('.js-click');

btnElem.addEventListener('click', onBtnClick);

function onBtnClick(e) {
  console.log(e.x, e.y);
}
