/**
 * - Подія input
 * - Подія focus
 * - Подія blur
 * - Подія change
 *
 * Виводь в консоль все що користувач вводить в input
 */

/* const inputElem = document.querySelector('.js-user-name');
inputElem.addEventListener('input', onInputChange);
function onInputChange() {
  const text = inputElem.value;
  const minLen = inputElem.dataset.len;

  if (text.length >= minLen) {
    inputElem.classList.add('valid');
    inputElem.classList.remove('invalid');
  } else {
    inputElem.classList.add('invalid');
    inputElem.classList.remove('valid');
  }
} */

/**
 * Користувач вводить в input своє ім'я після втрати
 * фокусу отримує alert з повідомленням-привітанням
 */

/* const inputElem = document.querySelector('.js-user-name');

inputElem.addEventListener('focus', onInputFocus);
inputElem.addEventListener('blur', onInputBlur);

function onInputFocus() {
  inputElem.classList.remove('invalid');
  inputElem.classList.remove('valid');
}

function onInputBlur() {
  const text = inputElem.value;
  const minLen = inputElem.dataset.len;

  if (text.length >= minLen) {
    inputElem.classList.add('valid');
  } else {
    inputElem.classList.add('invalid');
  }
}
 */

/* const inputElem = document.querySelector('.js-user-name');

inputElem.addEventListener('change', onInputChange);

function onInputChange() {
  console.log('Changed');
} */

// ====================

/* const inputElem1 = document.querySelector('.js-user-name');
const inputElem2 = document.querySelector('.js-check-1');

inputElem2.addEventListener('change', onInputChange);

function onInputChange() {
  inputElem1.disabled = !inputElem2.checked;
} */
