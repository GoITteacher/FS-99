/*
 * Блокова область видимості змінних
 */

const b = 20;
const c = 30;

function foo1() {
  const a = 10;
}

function foo2() {
  const a = 20;
}

function foo3() {
  console.log(a);
}

// const c = 15;

// if (true) {
//   const a = 5;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// if (true) {
//   const b = 10;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// console.log(a);
// console.log(b);
// console.log(c);
