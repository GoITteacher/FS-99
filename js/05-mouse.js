/*
 * Події миші
 * - mouseenter і mouseleave (це ховер)
 * - mousemove (chatty event - балакуча подія)
 */

const boxElem = document.querySelector('.js-box');
const child = boxElem.firstElementChild;

boxElem.addEventListener('mousemove', e => {
  const x = e.pageX;
  const y = e.pageY;

  child.style.left = `${x - 50}px`;
  child.style.top = `${y - 50}px`;
});

// ==============================
/* boxElem.addEventListener('mouseenter', onBoxElemMouseEnter);
boxElem.addEventListener('mouseleave', onBoxElemMouseLeave);

function onBoxElemMouseEnter() {
  boxElem.classList.add('box--active');
}

function onBoxElemMouseLeave() {
  boxElem.classList.remove('box--active');
}
 */
