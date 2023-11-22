/**
 * Оператор switch
 */

const username = "Mango";

switch (username) {
  case "Poly":
    console.log("1");
    break;

  case "Mango":
    console.log("2");
    break;

  case "Apple":
    console.log("3");
    break;
}

/**
 * Виконай рефакторинг коду задачі використовуючи switch.
 *
 * Якщо до дедлайну 0 днів - виведи рядок "Today"
 * Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
 * Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
 * Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
 */

const daysUntilDeadline = 0;

switch (daysUntilDeadline) {
  case 0:
    console.log("Today");
    break;
  case 1:
    console.log("Tomorrow");
    break;
  case 2:
    console.log("OverTomorrow");
    break;
  default:
    console.log("Date in the future");
}

/*
 * Напиши скрипт выбора опции доставки товара.
 * Опция хранится в переменной option: 1 - самовывоз, 2 - курьер, 3 - почта
 *
 * В переменную message записать сообщение в зависимости от опции.
 * - 'Вы сможете забрать товар завтра с 12:00 в нашем офисе'
 * - 'Курьер доставит заказ завтра с 9:00 до 18:00'
 * - 'Посылка будет отправлена сегодня'
 * - 'Вам перезвонит менеджер'
 */

const option = 5;
let message = "";

switch (option) {
  case 1:
    message = "Вы сможете забрать товар завтра с 12:00 в нашем офисе";
    break;

  case 2:
    message = "Курьер доставит заказ завтра с 9:00 до 18:00";
    break;

  case 3:
    message = "Посылка будет отправлена сегодня";
    break;

  default:
    message = "Вам перезвонит менеджер";
}

console.log(message);

// const x = 10;

// switch (x) {
//   case 1: // x === 1
//     break;
//   case 2: // x === 2
//     break;
//   case 3: // x === 3
//     break;
//   case 4: // x === 4
//     break;
//   case 5:
//     break;
// }

// if (age > 18) {
// } else if (money > 50) {
// } else if (x === 3) {
// } else if (x === 4) {
// } else if (x > 5) {
// }
