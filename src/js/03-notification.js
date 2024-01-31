/**
 * - Показуємо та ховаємо, додаючи/видаляючи клас is-visible
 * - Ховаємо через певний час
 * - Ховаємо при кліці
 * - Не забуваємо чистити таймер
 */

const NOTIFICATION_DELAY = 3000;
const notification = document.querySelector('.js-alert');
let timeoutId;

const intervalId = setInterval(() => {
  showNotification();
  timeoutId = setTimeout(hideNotification, 4000);
}, 5000);

notification.addEventListener('click', () => {
  hideNotification();
  clearTimeout(timeoutId);
});

setTimeout(() => {
  clearInterval(intervalId);
}, 20000);

function showNotification() {
  console.log('Show');
  notification.classList.add('is-visible');
}
function hideNotification() {
  console.log('Hide');
  notification.classList.remove('is-visible');
}
