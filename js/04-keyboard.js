/*
 * Типи подій: keypress, keydown, keyup
 * - Обмеження keypress
 * - Властивості key та code
 */

document.addEventListener('keydown', onDocumentKeyDown);
function onDocumentKeyDown(e) {
  console.log('keydown', e.code);
}

document.addEventListener('keyup', onDocumentKeyPress);

function onDocumentKeyPress(e) {
  console.log('keyup', e.code, e.key);
  /* if (e.shiftKey && e.code === 'KeyS') {
    console.log('Save');
  } */
}

/**
 * Обробка комбінацій клавіш
 */
