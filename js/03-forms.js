/*
 * - Подія submit
 * - Дії браузера за замовчуванням
 * - Властивість elements
 *
 * Оброби форму та збери відгук користувача в об'єкт
 */

const formElem = document.querySelector('.js-form');
const boxElem = document.querySelector('.js-list');

formElem.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const userEmail = formElem.elements.email.value; // "hello"
  const userPassword = formElem.elements.password.value; // '123'
  const userComment = formElem.elements.comment.value;
  const userColor = formElem.elements.userColor.value;

  const obj = {
    userEmail,
    userPassword,
    userComment,
    userColor,
  };

  const markup = itemTemplate(obj);
  boxElem.insertAdjacentHTML('beforeend', markup);

  formElem.reset();
}

function itemTemplate(obj) {
  return `
  <div class="item" style="background-color: ${obj.userColor};">
    <p>${obj.userEmail}</p>
    <p>${obj.userPassword}</p>
    <p>${obj.userComment}</p>
  </div>
  `;
}
