const cars = [
  {
    make: "Honda",
    model: "CR-V",
    type: "suv",
    amount: 14,
    price: 24045,
    onSale: true,
    color: "red",
    isSportCar: true,
    year: 2020,
  },
  {
    make: "Honda",
    model: "Accord",
    type: "sedan",
    amount: 2,
    price: 22455,
    onSale: true,
    color: "green",
    isSportCar: false,
    year: 2020,
  },
  {
    make: "Mazda",
    model: "Mazda 6",
    type: "sedan",
    amount: 8,
    price: 24195,
    onSale: false,
    color: "blue",
    isSportCar: true,
    year: 2021,
  },
  {
    make: "Mazda",
    model: "CX-9",
    type: "suv",
    amount: 7,
    price: 31520,
    onSale: true,
    color: "red",
    isSportCar: false,
    year: 2015,
  },
  {
    make: "Toyota",
    model: "4Runner",
    type: "suv",
    amount: 19,
    price: 34210,
    onSale: false,
    color: "black",
    isSportCar: false,
    year: 2010,
  },
  {
    make: "Toyota",
    model: "Sequoia",
    type: "suv",
    amount: 16,
    price: 45560,
    onSale: false,
    color: "yellow",
    isSportCar: false,
    year: 2017,
  },
  {
    make: "Toyota",
    model: "Tacoma",
    type: "truck",
    amount: 4,
    price: 24320,
    onSale: true,
    color: "black",
    isSportCar: false,
    year: 2020,
  },
  {
    make: "Ford",
    model: "F-150",
    type: "truck",
    amount: 11,
    price: 27110,
    onSale: true,
    color: "red",
    isSportCar: true,
    year: 2016,
  },
  {
    make: "Ford",
    model: "Fusion",
    type: "sedan",
    amount: 13,
    price: 22120,
    onSale: true,
    color: "green",
    isSportCar: true,
    year: 2003,
  },
  {
    make: "Ford",
    model: "Explorer",
    type: "suv",
    amount: 6,
    price: 31660,
    onSale: false,
    color: "green",
    isSportCar: false,
    year: 2020,
  },
];

// const task1 = (year) => {
//   return cars.reduce((sum, car) => {
//     if (car.year > year) {
//       sum += car.price;
//     }
//     return sum;
//   }, 0);
// };

// console.log(task1(2020));
// console.log(task1(2000));

// ============================

// const arr = [2, 4, 2, 7, 3, 8, 9, 2, 1, 3, 6, 7];

// arr.sort((a, b) => {
//   return a - b;
// });

// console.log(arr);

// ============================

/* const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];
const result = [...arr1, ...arr2, ...arr3]; */

/* const obj1 = {
  a: 10,
  b: 10,
  c: 10,
};
const obj2 = {
  x: 20,
  y: 20,
  z: 20,
};
const result = { ...obj1, ...obj2 };
console.log(result); */

/* const userDefault = {
  name: "Default",
  age: 0,
  phoneNumber: "000000",
  isStudent: false,
};

const userInfo = {
  name: "Max",
};

const result = {
  ...userDefault,
  ...userInfo,
};

console.log(result); */

/* const result = [1, 3, 5, 6, 2, 1];

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

result.push(...arr1, ...arr3);
const max = Math.max(...arr1, ...arr2, ...arr3);

console.log(result); */
// ==============================

// rest

// function foo(x1, ...args) {
//   console.log(args);
// }

// foo(10, 20, 30, 40);

// ===============================

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// arr.splice(5, 1, "HELLO", "WORLD", "TEST");

// console.log(arr);

// ==============================

/* const arr = [10, 20, "awd", "234", true, false, 30, null, undefined];

function calculateTotal() {
  let total = 0;

  for (const elem of arr) {
    console.log(typeof elem);
    if (typeof elem === "number") {
      total += elem;
    }
  }

  return total;
}

console.log(calculateTotal()); */

// ==============================

/* function foo(x, y) {
  console.log(this);
}

const obj1 = {
  name: "Obj1",
  test: foo,
};

obj1.test();

obj1.test.call("Hello", 10, 20);
obj1.test.apply("Hello", [10, 20]);

const copy = foo.bind(obj1);
copy();
copy.call({});
copy.apply(10); */

// ===============================

/* class User {
  static #counter = 0;
  static helloWorld = 0;

  constructor(name, age, phoneNumber, isStudent) {
    this.name = name;
    this.age = age;
    this.phoneNumber = phoneNumber;
    this.isStudent = isStudent;
    User.#counter++;
  }

  toString() {
    return `Counter: ${User.#counter}
Name: ${this.name}
Age: ${this.age}
PhoneNumber: ${this.phoneNumber}
IsStudent: ${this.isStudent}`;
  }

  static get counter() {
    return User.#counter;
  }

  static set counter(value) {
    this.#counter = value;
    console.log("Дякую за поповнення");
  }
}

const obj1 = new User("Artem", 15, "09123234", true);
const obj2 = new User("Vlad", 25, "34345345", false);
const obj3 = new User("Igor", 55, "346456", true);
const obj4 = new User("Max", 75, "3453453", false);

console.log(obj1 + "");
console.log(obj2 + "");
console.log(obj3 + "");
console.log(obj4 + ""); */
