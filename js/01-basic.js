/**
 * Деструктуризація об'єкта
 * 
 * - Навіщо потрібна деструктуризація?
   - Деструктуризація об'єктів **01-basic.js**
   - Деструктуризація неіснуючих властивостей
   - Перейменування змінної
   - Значення за замовчуванням
   - Деструктуризація в циклах **03-loops.js**
   - Деструктуризація параметрів **02-params.js**
   - Патерн "об'єкт параметрів”
   - Глибока деструктуризація
 */

/* const user = {
  username: 'Jacob name',
  age: 20,
  isStudent: false,
  city: 'Dnipro',
  country: 'Ukraine',
}; */

/* 
const username = user.username;
const age = user.age;
const isStudent = user.isStudent;
const city = user.city;
const country = user.country; 
*/

/* let { username, age, isStudent, city, country } = user;

console.log(username, age, isStudent, city); */
//=================================

/* const obj = {
  x: 10,
  y: 20,
};

const { x, y, q } = obj;

console.log(x, y, q); */

// const x = obj.x;
// const y = obj.y;
// const q = obj.q;

//=================================

/* const x = 'Hello world';

const obj = {
  x: 10,
  y: 20,
}; */

// const { x: myX1, x: myX2, x: myX3 } = obj;

//const myX1 = obj.x
//const myX2 = obj.x
//const myX3 = obj.x

// console.log(myX1, myX2, myX3);
//=================================
/* const obj = {};

const { x = 0, y = 0, q = 0 } = obj;

console.log(x, y, q); */
//=================================
/* const x = 'Hello world';
const y = 'Hello world';
const q = 'Hello world';

const obj = {
  x: 10,
  y: 20,
};

const { q: myQ = 0, x: myX = 0, y: myY = 0 } = obj;

console.log(myX, myY, myQ); */
//=================================

/**
 * Глибока деструктуризація об'єкта
 */
//=================================
/* const user = {
  username: 'Jacob name',
  age: 20,
  location: {
    country: 'Ukraine',
    city: 'Dnipro',
    street: 'My street',
    position: {
      x: 10,
      y: 20,
    },
  },
};
const {
  location: {
    country,
    city,
    street,
    position: { x, y },
  },
} = user; */
//=================================

/* function foo({ name, age, isStudent, city, country, street }) {
  console.log(name);
  console.log(age);
  console.log(isStudent);
  console.log(city);
  console.log(country);
  console.log(street);
}

const options = {
  age: 23,
  name: 'Volodymyr',
  street: 'My Street',
  country: 'Ukraine',
  city: 'Dnipro',
  isStudent: false,
};

foo(options); */

/* function foo({ isStudent, isAdmin, isTeacher, isValid, isDevops }) {}

const options = {
  isStudent: true,
  isAdmin: true,
  isTeacher: false,
  isValid: true,
  isDevops: true,
};

foo(options); */

/* const options = {
  isStudent: true,
  isAdmin: true,
  isTeacher: false,
  isValid: true,
  isDevops: true,
};

function foo(x, { isStudent: isOk = false, y }) {
  console.log(x);
  console.log(isOk);
}

foo(10, options); */

//=================================

// const {country, city, street} = user.location;
// const= user.location;

//=================================

// const book = {
//   id: '12eeriugcjay123234',
//   title: 'Book Title',
//   author: 'Book Author',
//   price: 200,
// };

// const { id, ...test, price} = book;

// function saveBook({ id, ...book }) {
//   console.log(book);
// }

// saveBook(book);
//=================================

/**
 * Деструктуризація масива
 */
//=================================

/* const arr = [1, 2, 3, 4, 5];

const [x, , q] = arr;

console.log(x, q); */

//=================================

/* const rgb = [123, 255, 111];
const rgba = [123, 255, 111, 0.4];

const [red, green, blue] = rgb;
const [r, g, b, a] = rgb; */

//=================================

/* const point = [10, 20];
const [x, y] = point; */

//=================================

/* const arr = [3, 1, 5, 7, 2, 9, 6, 3];

const [x, y, ...newArr] = arr;

console.log(newArr); */

//=================================

/* let x = 10;// 20
let y = 20;// 10

let temp;

temp = x;//10
x = y;
y = temp; */
/* 
let x = 1;
let y = 2;
let q = 3;
let t = 4;
let r = 5;
let u = 6; */

// [x, y, q, t, r, u] = [q, q, t, r, u, r];

// const [x, y, q, t] = [10, 20, 30, 40];

//===================================

/* const rgb = [100, 200, 41];

const [r, g, b, a = 1] = rgb;

console.log(r, g, b, a); */

//=================================
