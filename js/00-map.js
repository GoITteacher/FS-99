/* function myDay(callback1, callback) {
  console.log("Застелити ліжко");
  console.log("Почистити зуби");
  console.log("Сніданок");
  console.log("Піти до школи");
  console.log("Займатись");

  callback();

  console.log("Повернутись зі школи");
  console.log("повечеряти");
  console.log("Зробити дз");
  console.log("Зубки");
  console.log("Спати");
}

function goToMusicSchool() {
  console.log("Піти до муз школи");
}

function goToDanceSchool() {
  console.log("Піти до школи танців");
}

function goToStore() {
  console.log("Піти до магазину");
}

myDay(goToMusicSchool);

console.log("\n\n\n\n");
myDay(goToDanceSchool); */

// ============================

// function foo(awhdnagefhjdawgdhahgwdh) {
//   console.log(x);
// }

// ============================

// function foo(x) {
//   console.log(x);
// }

// const myValue = 10;

// foo(myValue)

// ============================

// function foo(callback) {
//   callback();
// }

// foo(function () {}, 10, 20);

// ===========================

// MAP

// const arr = [1, 3, -5, 6, -1, 3, -5, 7, -8, 3];

// function callback(item, idx, array) {
//   return Math.abs(item);
// }

// const newArr = arr.map((num) => num * -1);

// console.log(newArr);
// ========================

// const arr = [1, [[[2, [3]]], [[[[[4]]]]], 4], 4, [5, 6], 7];

// const result = arr.flat(Infinity);

// console.log(result);

// const arr = [1, 2, 3, 4, 5, 6, 67, 88];

// const newArr = arr
//   .map((item) => {
//     item * 2;
//   })
//   .flat(1);

// const newArr = arr.flatMap(() => {});

// ====================

const cars = [
  {
    model: "Tesla S",
    owners: ["Max", "Roman"],
  },
  {
    model: "BMW",
    owners: ["Yaroslav"],
  },
  {
    model: "AUDI",
    owners: ["Mila"],
  },
  {
    model: "Toyota",
    owners: ["Lina", "Natali"],
  },
];

const owners = cars.flatMap((car) => car.owners);

console.log(owners);
