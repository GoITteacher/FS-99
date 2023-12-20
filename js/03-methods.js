/**
 * Контекст виконання функції
 *
 * - Метод call
 * - Метод apply
 * - Метод bind
 */

// =================

/* const user1 = {
  name: "Borys",
  drive() {
    console.log(this.name);
  },
};

const user2 = {
  name: "Katya",
};Hello
const user3 = {
  name: "Mila",
};

user1.drive.call(user2);

user1.drive();

user1.drive.call(user3); */

/* function rgbToBlackWhite(r, g, b) {
  console.log(this, (r + g + b) / 3);
}

const user = {
  name: "Max",
};

const red = 25;
const green = 23;
const blue = 4;
rgbToBlackWhite.call(user, red, green, blue);

const rgb = [24, 46, 75];
rgbToBlackWhite.apply(user, rgb); */

//==================

/* const showThis = function (a, b, arr) {
  console.log(a, b, arr);
  console.log("showThis -> this", this);
};

showThis();

const objA = {
  a: 5,
  b: 10,
};

showThis.call(objA, 5, 1, [100, 200, 300]);
showThis.apply(objA, [5, 1, [100, 200, 300]]);

const objB = {
  x: 788,
  y: 25,
};

showThis.call(objB, 1, 1, 2);
showThis.apply(objB, [1, 1, 2]);

showThis(); */

/**
 * -------------------------------
 */
/* const changeColor = function (color) {
  console.log("changeColor -> this", this);
  this.color = color;
};

const hat = {
  color: "black",
};

changeColor.call(hat, "orange");
console.log(hat);

const sweater = {
  color: "green",
};

changeColor.call(sweater, "blue");
console.log(sweater); */

/**
 * -------------------------------
 */
/* const changeHatColor = changeColor.bind(hat);
const changeSweaterColor = changeColor.bind(sweater);

changeHatColor("yellow");
console.log(hat);

changeSweaterColor("red");
console.log(sweater);
 */
/**
 * -------------------------------
 */
/* const counter = {
  value: 0,
  increment(value) {
    console.log("increment -> this", this);
    this.value += value;
  },
  decrement(value) {
    console.log("decrement -> this", this);
    this.value -= value;
  },
}; */

/* const updateCounter = function (value, operation) {
  operation(value);
};

updateCounter(10, counter.increment.bind(counter));
updateCounter(5, counter.decrement.bind(counter));
console.log(counter);
 */

// ================================

/* function foo() {
  console.log(this);
}

const user1 = {
  name: "Karl",
};

const user2 = {
  name: "Alex",
};

const copy = foo.bind(user1);
const copy1 = foo.bind(user2);

copy1(); */

// ===============================
//           ЗАМИКАННЯ
// ===============================
/* const x = 20;
const y = 50;

function foo() {
  const x = 10;
  const y = 20;
  const q = 30;

  const arr = () => {
    debugger;
    const x = 50;
    console.log(x + y);
  };

  arr();
}

foo(); */

// ===============================

/* function getCalc(name) {
  function calc(x, y) {
    console.log(name, x + y);
  }

  return calc;
}

const pc1 = getCalc("Volodka");
const pc2 = getCalc("Roman");

pc1(20, 1);
pc1(21, 1);
pc1(22, 1);

pc2(40, 12);
pc2(40, 12);
pc2(40, 12); */

// ===============================

const user1 = {
  name: "Antoha",
};
const user2 = {
  name: "Kamila",
};
const user3 = {
  name: "Antonina",
};

/* function father() {
  const arrow = () => {
    console.log(this);
  };

  return arrow;
}

const arrow2 = father.call(user3);

arrow2(); */

// ===============================

/*
1. Визначити тип функції
- якщо звичайна - дивимось момент виклику
- якщо стрілчата - дивимось момент створення бат. контекст
*/
