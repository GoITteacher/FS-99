/**
 * Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді
 * рядка формату "14 г. 26 хв.". Якщо значення змінної minutes дорівнює 0,
 * то виводь рядок "14 г.", без хвилин.
 */

const hours = 14;
const minutes = 20;
let timestring = `${hours}г.`; // 14г

// if (minutes === 0) {
//   timestring = `${hours}г.`;
// } else {
//   timestring = `${hours}г. ${minutes}хв`;
// }

// let timestring = minutes === 0 ? `${hours}г.` : `${hours}г. ${minutes}хв.`;

// if (minutes !== 0) {
//   timestring += ` ${minutes}хв.`;
// }

// console.log(timestring);

/**
 * Напиши скрипт для відображення часу дедлайну здачі проекту. Використовуй if...else.
 *
 * Якщо до дедлайну 0 днів - виведи рядок "Today"
 * Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
 * Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
 * Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
 */

const daysUntilDeadline = 5;

function getDeadline(daysUntilDeadline) {
  let message;
  if (daysUntilDeadline === 0) {
    message = "Today";
  } else if (daysUntilDeadline === 1) {
    message = "Tomorrow";
  } else if (daysUntilDeadline === 2) {
    message = "Overmorrow";
  } else {
    message = "Date in the future";
  }

  return message;
}

getDeadline(1);
console.log(sms);
