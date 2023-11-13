/**
 * Типові помилки
 *
 * - Звернення до змінної до її оголошення
 * - Перевизначення значення для змінної оголошеної через const
 * - Обращение по неправильному імени змінної
 *
 */

const username = "Mango";
console.log(user); // ReferenceError: user is not defined

console.log(age); // ReferenceError: age is not defined
let age = 20;
age = 25;
console.log(age); // 25

const price = 200;
price = 250;
