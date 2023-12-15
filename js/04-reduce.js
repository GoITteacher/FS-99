/**
 * Метод reduce
 *
 * - Поелементно перебирає оригінальний масив
 * - Значення, що повертається, залежить від розробника
 */
/* const arr = [2, 5, 8, 1];

const result = arr.reduce((acc, item, idx, array) => {
  return acc + item;
}, 0);

console.log(result); */

// const arr = [2, 5, 8, 1];

// const result = arr.reduce((acc, item, idx, array) => {
//   if (item % 2 === 0) {
//     acc.push(item);
//   }
//   return acc;
// }, []);

// console.log(result);

// const numbers = [5, 10, 15, 20, 25];
// const total = numbers;
// console.log(total);

/**
 * Рахуємо загальну зарплату
 */

/* const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};

const totalSalary = salary;
console.log(totalSalary); */

/**
 * Рахуємо загальну кількість годин
 */

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, online: false },
  { id: "player-5", name: "Chelsey", timePlayed: 80, online: true },
];
/* 
const totalTimePlayed = players.reduce((acc, item) => {
  return acc + item.timePlayed;
}, 0); */

/* const obj = players.reduce((acc, item) => {
  if (item.online && !acc) {
    acc = item;
  }
  return acc;
}, null);
console.log(obj); */

/**
 * Рахуємо загальну суму товарів кошика
 */

// const cart = [
//   { label: "Apples", price: 100, quantity: 2 },
//   { label: "Bananas", price: 120, quantity: 3 },
//   { label: "Lemons", price: 70, quantity: 4 },
// ];

// const totalAmount = cart.reduce((sum, elem) => {
//   return sum + elem.price * elem.quantity;
// }, 0);

// console.log(totalAmount);
