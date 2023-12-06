/**
 * Перебір об'єкта
 *
 * - Цикл for...in
 * - Метод Object.keys
 * - Метод Object.values
 */

/* const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
}; */

// const recipe = {
//   name: "Test",
//   price: 123,
//   ingridient1: "1",
//   ingridient2: "2",
//   ingridient3: "3",
//   ingridient4: "4",
//   ingridient5: "5",
//   ingridient6: "6",
// };

// const values = [];

// for (const key in recipe) {
//   if (key.includes("ingridient")) {
//     values.push(recipe[key]);
//   }
// }

// console.log(values);

// let totalFeedback = 0;
// let averageFeedback = totalFeedback/;

// for (const key in feedback) {
//   totalFeedback += feedback[key];
// }

// for(let i =0;i<10;i++){
//   console.log(i, arr[i]);
// }

// console.log("totalFeedback: ", totalFeedback);

// ========================

// const parent = {
//   x: 123,
//   y: 344,
// };

// const child = {
//   q: "test",
//   t: "hello",
//   __proto__: parent,
// };

// for (const key in child) {
//   console.log(key);
// }

// console.log(child);
// console.log(child);

/**
 * ---------------------------------
 */
const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

// ['good', 'neutral', 'bad']

// const keys = Object.keys(feedback);
// console.log(keys);

// for (const key of keys) {
//   feedback[key] *= 2;
//   console.log(feedback[key]);
// }

// console.log("totalFeedback: ", totalFeedback);

// [5, 10, 3]
// const values = Object.values(feedback);
// console.log(values);

// console.log('totalFeedback: ', totalFeedback);
