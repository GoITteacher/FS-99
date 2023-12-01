/**
 * Псевдомасив arguments и Array.from
 */

/* 
push
pop
shift
indexOf
slice
includes
splice
*/

// console.log([]);
// function foo() {
// let arguments = ["Hello", "World"]
//   const args = Array.from(arguments);
// }

// foo("Hello", "World");

/**
 * Напиши функцію add для складання довільної
 * кількості аргументів
 */

// function getTotal() {
//   const args = Array.from(arguments);
//   let total = 1;

//   for (const item of args) {
//     total *= item;
//   }

//   return total;
// }

// const res1 = getTotal(1, 2, 3, 4);
// const res2 = getTotal(1, 2);
// const res3 = getTotal(1, 5, 3, "Hello");

// console.log(res1, res2, res3);

/**
 * Напиши функцію calcAverage() яка приймає довільну кількість
 * аргументів і повертає їхнє середнє значення. Усі аргументи
 * будуть лише числами.
 */

// function calcAverage() {
//   const args = Array.from(arguments);
//   let total = 0;

//   for (const elem of args) {
//     total += elem;
//   }

//   return total / args.length;
// }

// const res1 = calcAverage(1, 2, 4, 5);
// console.log(res1.toFixed(5));

// =======================

/* 
    Написати функцію яка приймає першим параметром число на яке потрібно поділити суму усіх інших параметрів
*/
/* 
function myFun() {
  const firstElem = arguments[0];
  let total = 0;

  for (let i = 1; i < arguments.length; i += 1) {
    total += arguments[i];
  }

  return total / firstElem;
} */

/* function myFun() {
  let total = 0;
  const args = Array.from(arguments);
  const firstElem = args.shift();

  for (const item of args) {
    total += item;
  }

  return total / firstElem;
} */

// myFun(5, 10, 15, 20);
