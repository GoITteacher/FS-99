/**
 * Розгалуження
 *
 * - Інструкція if
 * - Інструкція if...else
 * - Блок else...if
 * - Тернарний оператор
 */

function security(age, money) {
  if (age >= 18) {
    console.log("Hello");
    return "Vip";
  } else if (money >= 50) {
    console.log("Hi");
    return "Standar";
  } else {
    console.log("Bye");
    return null;
  }
}

// const ticket = security(18, 200);

// console.log(ticket);

// security(19, 200);
// security(15, 200);
// security(10, 10);

/**
 * -----------------------------
 */

let exp = 10;

// let myStatus;
// if (exp > 200) {
//   myStatus = "Top";
// } else {
//   myStatus = "Norm";
// }

// let myStatus = exp > 200 ? "Top" : "Norm";

// console.log(myStatus);

// const points = 5000;

/**
 * -----------------------------
 */
// const balance = 1000;
// let message;

// if (balance >= 0) {
//   message = "Positive";
// } else {
//   message = "Negative";
// }

// const message = balance >= 0 ? 10 : "Negative";
// console.log(message);
