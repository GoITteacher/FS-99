/**
 * Ітерація по масиву
 *
 * - Ітерація по масиву циклом for
 * - Метод includes
 * - Цикл for...of
 * - Різниця у використанні for и for...of
 */

const friends = ["Mango", "Kiwi", "Poly", "Ajax"];

// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends[3]);
// console.log(friends[4]);
// console.log(friends[5]);
// console.log(friends[6]);
// console.log(friends[7]);
// console.log(friends[8]);
// console.log(friends[9]);

// for (let i = 0; i < friends.length; i += 2) {
//   if (i % 2 === 0) {
//     console.log(friends[i]);
//   }
// }

// let x = 10;
// x = x + 1;
// x += 2;

// function foo(arr1, arr2) {
//   const arr3 = [];

//   for (let i = 0; i < arr2.length; i += 1) {
//     if (arr1.includes(arr2[i])) {
//       arr3.push(arr2[i]);
//     }
//   }

//   return arr3;
// }

// const result = foo(
//   [1, 2, 4, 2, 1, 1, 3, 4, 5, 5, 6, 6, 3, 3],
//   [4, 5, 3, 1, 1, 3, 4, 54, 2, 1, 13, 4]
// );

// console.log(result);

// ===============================

// for (let i = 0; i < arr.length; i += 1) {
//   arr[i] *= 2;
// }

// for (let num of arr) {
//   console.log(num);
// }

// console.log(arr);
/**
 * Напиши скрипт для обчислення площі прямокутника зі сторонами,
 * значення яких зберігаються у змінній values у вигляді рядка.
 * Значення гарантовано розділені пробілом.
 */

/**
 * Напиши скрипт для перебору масиву fruits.
 * Для кожного елемента масиву виведи в консоль рядок
 * у форматі номер_елемента: значення_елемента.
 * Нумерація елементів повинна починатися з 1.
 */
/* 
"поясніть будь ласка як виконати цю задачку я її виконав але нічого не зрозумів можете пояснити Функція getSlice(array, value) приймає два параметра:

array - масив довільних елементів
value - значення елемента масиву для пошуку
Доповни код функції getSlice(array, value) так, щоб вона виконувала пошук значення value у масиві array і повертала:

порожній масив, якщо в array немає елемента зі значенням value
підмасив, що починається з початку array і до елемента зі значенням value включно, якщо такий елемент є в array дякую )"
*/
// ==========================
const arr = [1, 3, 5, 52, 3, 8, 7, 3, 6, 8];

function getSlice(array, value) {
  const index = array.indexOf(value);
  if (!array.includes(value)) return [];
  else return array.slice(0, index + 1);
}
