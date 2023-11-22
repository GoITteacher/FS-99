/**
 * Логічні оператори
 *
 * - Перетворення типів: логічне
 * - Оператор &&
 * - Оператор ||
 * - Оператор !
 */
// ==============================
// const str = "10";
// 10;
// const num = "10";

// console.log(str == num);
// console.log(str === num);

// ==============================

// console.log(Boolean(true)); // true
// console.log(Boolean(false)); // false
// console.log(Boolean(NaN)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(0)); // false
// console.log(Boolean(3.14)); // true
// console.log(Boolean(-10)); // true
// console.log(Boolean("")); // false
// console.log(Boolean("0")); // true
// console.log(Boolean("false")); // true

/**
 * --------------------------------
 */
// const userName = "";

// console.log(5 && 4);
// console.log(5 && "mango");

// Завжди ліву частину якщо там значення фолс, в іншому випадку праву частину;
// "Hello" && "World";
// const result = "Hello" && 0;
// console.log(result);

// const salary = 100;
// const freeTime = 2.5;

// if (salary > 1000 && freeTime > 2 && true && true) {
//   console.log("Uhuuu");
// }

/**
 * --------------------------------
 */
// Завжди ліву частину якщо там значення true, в іншому випадку праву частину;

// console.log(false || 5);
// console.log(false || null);

// const salary = 500;
// const freeTime = 2.5;

// if (salary >= 1000 || freeTime > 3) {
//   console.log("Good");
// };

// const userName = prompt("Enter Your name"); // ''
// const message = userName || "Anonym";
// console.log(message);

// const result = prompt("Message", "test");

// confirm("Your are ok");
// =============================

// Завжди праву частину якщо там зліва значення (null undefined), в іншому випадку ліву частину;
// const result = undefined ?? "Hello";
// console.log(result);

/**
 * --------------------------------
 */

// console.log(!5); //false
// console.log(!false); //true

/**
 * --------------------------------
 */

// console.log(true && 3);// 3

// console.log(false && 3); // f

// console.log(true && 4 && "kiwi");// k

// console.log(true && 0 && "kiwi");// 0

// console.log(true || 3); //t

// console.log(true || 3 || 4); //t

// console.log(true || false || 7); // t

// console.log(null || 2 || undefined); //2

// console.log(0 > 0); // false

// console.log(null || (2 && 3) || 4); // 3

// true && false && (true || true || false) && true;
// 1 * 1 * (1 + 1 + 0) * 1 = 2 - true

// true || (false && true);

// t = 1
// f = 0

// && - *;
// || - +
