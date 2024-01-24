/**
 * JSON
 */

// const data = {
//   name: 'Vasya',
//   age: 10,
//   test: undefined,
//   phoneNumber: '1231',
//   isStudent: false,
//   city: null,

//   showName() {
//     console.log('Name');
//   },
// };

// const zip = JSON.stringify(data);

// const zip = `{"name":"Vasya","age":10,"phoneNumber":"1231","isStudent":false,"city":null}`;
// const data = JSON.parse(zip);
// console.log(data);

// =================================

/* console.log('START');

try {
  const str = prompt('Enter your json:'); //'"Hello"'
  const data = JSON.parse(str);
  console.log(data);
} catch (err) {
  console.log(err);
}

console.log('END'); */

// ===================================
/* 
function foo1() {
  foo2();
}

function foo2() {
  const test = 10;
  foo3();
}

function foo3() {
  foo4();
}

function foo4() {
  console.log(test);
} */

/**
 * LocalStorage
 */

/**
 * Збереження
 * Чому треба використовувати метод JSON.stringify
 */

/* const data = {
  name: 'Vasya',
  age: 10,
  isStudent: true,
};

const zip = JSON.stringify(data);

localStorage.setItem('userData', zip); */

/**
 * Читання
 * Чому треба використовувати метод JSON.parse
 */

// const zip = localStorage.getItem('userData');

// const data = JSON.parse(zip);

// console.log(data);

/* const myName = localStorage.getItem('name');
const myCity = localStorage.getItem('city');
const myAge = localStorage.getItem('age');

console.log(myName);
console.log(myCity);
console.log(myAge); */

/**
 * Видалення
 */

// localStorage.removeItem('isTeacher');
// localStorage.clear();
