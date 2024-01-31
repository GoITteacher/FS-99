/**
 * - Показуємо та ховаємо, додаючи/видаляючи клас is-visible
 * - Ховаємо через певний час
 * - Ховаємо при кліці
 * - Не забуваємо чистити таймер
 */

const NOTIFICATION_DELAY = 3000;
let timeoutId = null;
const notification = document.querySelector(".js-alert");

notification.addEventListener("click", onNotificationClick);

showNotification();

/*
 * Функції
 */
function onNotificationClick() {
  hideNotification();
  clearTimeout(timeoutId);
}

function showNotification() {
  notification.classList.add("is-visible");

  timeoutId = setTimeout(() => {
    console.log(
      "Закриваємо сповіщення автоматично, щоб воно не залишалося відкритим"
    );
    hideNotification();
  }, NOTIFICATION_DELAY);
}

function hideNotification() {
  notification.classList.remove("is-visible");
}
