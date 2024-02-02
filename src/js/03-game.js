/**
 * Напиши програмне забезпечення для ігрового автомата.
 * Для вирішення завдання використай готову розмітку HTML та базову стилізацію.
 *
 * Після натиснення на кнопку "Start game"
 * в кожному віконці по черзі має з'являтись
 * смайлик з затримкою в 1 секунду ('🤑' або '👿')
 *
 * Під час обробки кожного віконця створи масив з Promis-ами
 * в якому кожен з них буде відповідати за своє віконце,
 * після чого оброби даний масив за допомогою методу Promise.allSettled
 *
 * Після того як всі віконця були заповнені потрібно
 * щоб скріпт автоматично визначав чи гравець переміг, чи ні.
 * Якщо в кожному віконці однаковий смайлик це означає що користувач переміг
 *
 * В поле result виводить повідомлення про статус гри ('Winner' або 'Loser')
 *
 * Після повторного натискання на кнопку "Start game"
 * поле має очищатись, а гра починатись з початку.
 */

const startBtn = document.querySelector('.start-btn');
const container = document.querySelector('.container');
const result = document.querySelector('.result');

startBtn.addEventListener('click', () => {
  const promises = [];

  for (let i = 0; i < 3; i++) {
    container.children[i].textContent = '';
    const delay = (i + 1) * 100;
    const isActive = Math.random() > 0.5;
    const promise = createPromise(delay, isActive);

    promise
      .then(data => {
        container.children[i].textContent = data;
      })
      .catch(err => {
        container.children[i].textContent = err;
      });

    promises.push(promise);
  }

  Promise.allSettled(promises).then(res => {
    const winner = res
      .map(el => {
        return el.value || el.reason;
      })
      .every(el => el === '🤑');

    result.textContent = winner ? 'Winner' : 'Loser';
  });
});

// ==========================================
function createPromise(delay, isValid) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isValid) {
        resolve('🤑');
      } else {
        reject('👿');
      }
    }, delay);
  });

  return promise;
}
