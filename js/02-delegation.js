const container = document.querySelector('.container');

container.addEventListener('click', e => {
  //   if (e.target.classList.contains('container')) return;
  //   if (!e.target.hasAttribute('data-test')) return;
  //   if (!e.target.classList.contains('js-btn')) return;
  //   if (e.target.nodeName !== 'BUTTON') return;

  if (e.target === e.currentTarget) return;
  const liElem = e.target.closest('li');
  console.log(liElem.dataset.id);
});

/**
 * Дегегування подій
 *
 * Отримай колір квадратика по якому було здійснено клік
 */
