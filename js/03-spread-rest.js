/**
 * Синтаксис spread і rest
 *
 * - Залишкові параметри
 * - Збір частини аргументів
 * - Входження параметрів
 * - Створення масиву
 * - Створення об'єкта
 */

/* const x1 = [1, 2, 3];
const x2 = [4, 5, 6];
const x3 = [7, 8, 9];

const y = ["START", ...x2, "HELLO", ...x1, ...x1, ...x3, "END"];
console.log(y);
const copy = [...x1];
 */
// console.log(numbers)

/**
 * Пошук найменшої аьо найбільшої температури (числа)
 */

/* const arr = [18, 21, 17, 29, 24];
const min = Math.min(...arr); */
// console.log(min);

/**
 * Створення масиву і тип за посиланням
 */
/* const a = [{ a: 10 }, { b: 20 }, { c: 30 }];
const b = [...a];

console.log(a === b);

console.log(a[0] === b[0]); */

/*
 * Поєднуємо кілька масивів в один через spread
 */
/* const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
console.log(allTemps);
 */
/*
 * Створення об'єкта
 */

// const objA = { x: 1, y: 2 };
// const objB = { x: 0, z: 3 };
// const objC = {
//   name: "123",
//   ...objB,
//   ...objA,
//   test: "123",
// };
// console.log(objC);

/**
 * Оновлюємо налаштування користувача
 */
const defaultSettings = {
  theme: "light",
  showNotifications: true,
  hideSidebar: false,
};

const userSettings = {
  ...defaultSettings,
  showNotifications: false,
  hideSidebar: true,
};

// console.log(userSettings);

// ======================

/* const defaultObj = {
  name: "Default",
  age: 0,
  isAdmin: false,
  city: "Default",
  country: "Ukraine",
};

const userInfo = {
  name: "Vasya",
  age: 32,
  city: "Dnipro",
};

const result = {
  ...defaultObj,
  ...userInfo,
};

console.log(result); */

const arr = [3, 4, 1, 3, 7, 7];
const obj = { ...arr };
// console.log(obj);

// ===================================

// function foo(x, y, ...args) {
//   console.log(args);
// }

// foo(10, 20, 30, 40, 50);
