/**
 * Напиши функцію logItems(items), яка отримує масив та використовує цикл,
 * який для кожного елемента масиву буде виводити в консоль повідомлення у
 * форматі <номер елемента> - <значення елемента>. Нумерація елементів
 * повинна починатися з 1.
 *
 * Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з
 * індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.
 */

function logItems(items) {
  // i = 1;
  for (let i = 0; i < items.length; i += 1) {
    console.log(i + 1, items[i]);
  }
}

// logItems(["Mango", "Poly", "Ajax"]);

// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

/**
 * Напиши функцію printInfo(names, phones) яка виводить
 * у консоль ім'я та телефонний номер користувача. У параметри
 * names та phones будуть передані рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імен та телефонів у рядках
 * вказують на відповідність. Кількість імен та телефонів
 * гарантовано однакова.
 */

// function printInfo(names, phones) {
//   names = names.split(",");
//   phones = phones.split(",");

//   for (let i = 0; i < names.length; i += 1) {
//     console.log(names[i], phones[i]);
//   }
// }

// printInfo(
//   "Jacob,William,Solomon,Artemis",
//   "89001234567,89001112233,890055566377,890055566300"
// );

/**
 * Напиши функцію formatTime(minutes) яка переведе значення
 * minutes (кількість хвилин) у рядок у форматі годин
 * та хвилин HH:MM.
 */

// function formatTime(minutes) {
//   const hours = Math.floor(minutes / 60) + "";
//   minutes = (minutes % 60) + "";
//   return `${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}`;
// }

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"

// let str = "help me";
// const result = str.padEnd(10, " ");
// console.log(result);

// ============================

/* 
Задача на знаходження суми: Напишіть функцію calculateSum, яка приймає два параметри, a та b. Функція повинна повертати суму цих двох чисел.
*/
/* 
function calculateSum(a, b) {
  return a + b;
}
const result = calculateSum(10, 20);
console.log(result); */

// ============================

/* Задача на знаходження середнього значення: Напишіть функцію calculateAverage, яка приймає три параметри - числа a, b та c. Функція повинна повертати середнє значення цих трьох чисел. */
/* 
function calculateAverage() {
  let total = 0;

  for (let item of arguments) {
    total += item;
  }

  return total / arguments.length;
}

const result = calculateAverage(10, 20, 3, 5);
console.log(result); */

// ============================

/* Задача на перевірку парності: Напишіть функцію isNumberEven, яка приймає один параметр - число. Функція повинна повертати true, якщо число парне, та false, якщо непарне. */

// function isNumberEven(x) {
//   return x % 2 === 0;
// }

// console.log(isNumberEven(2));
// console.log(isNumberEven(3));
// console.log(isNumberEven(4));
// console.log(isNumberEven(5));
// ============================

/* Задача на об'єднання рядків: Напишіть функцію concatenateStrings, яка приймає три параметри - рядки str1, str2 та str3. Функція повинна об'єднати ці рядки в один новий рядок і повернути його. */

// ============================

/* Задача на знаходження залишку від ділення: Напишіть функцію calculateRemainder, яка приймає два параметри - числа a та b. Функція повинна повертати залишок від ділення числа a на b. */

// ============================
/* 
Задача на перевірку на паліндром: Напишіть функцію isPalindrome, яка приймає рядок і повертає true, якщо він є паліндромом (читається однаково ззаду наперед), та false в іншому випадку.
 */

function isPalindrome(str) {
  const str2 = str.split("").reverse().join("");
  return str === str2;
}
// isPalindrome("шалаш");

// ============================

/* Задача на знаходження максимального числа в масиві: Напишіть функцію findMaxNumber, яка приймає масив чисел і повертає найбільше число в цьому масиві. */
// ============================

/* Задача на знаходження кількості додатних чисел в масиві: Напишіть функцію countPositiveNumbers, яка приймає масив чисел і повертає кількість додатних чисел в цьому масиві. */

// ============================

function slug(str) {
  // return str.replaceAll(" ", "_");
  str = str.split("");
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === " ") {
      str[i] = "_";
    }
  }

  str.join("");
}

const result = slug("awdawd awdawd awdawd awdaw awd");

console.log(result);
