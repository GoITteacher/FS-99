/**
 * Прототип об'єкта
 *
 * - Object.create()
 * - Власні і невласні властивості
 * - Перебір власних властивостей с hasOwnProperty()
 * - Ланцюжки прототипів
 */

// ==========================

/* const objA = {
  x: 10,
  y: 20,
};

const objB = {
  t1: 40,
  t2: 50,
  __proto__: objA,
};

console.log(objB);
console.log(objB.x); */

// ==========================
/* 
const animal = {
  legs: 4,
};




const dog = Object.create(animal);
dog.name = "Mango";

console.log(dog);
console.log(dog.name);
console.log(dog.legs);
console.log(dog.hasOwnProperty("name"));
console.log(dog.hasOwnProperty("legs"));

for (const key in dog) {
  if (dog.hasOwnProperty(key)) {
    console.log(key); // "name"
  }
} */

// const objX = {
//   x1: 10,
//   x2: 20,
// };

// const objY = Object.create(objX);

// console.log(objY.x1);

/**
 * ----------------------------------------
 */
/* const objC = { c: "objC prop" };

const objB = Object.create(objC);
objB.b = "objB prop";

const objA = Object.create(objB);
objA.a = "objA prop";

console.log(objA);
console.log(objB);
console.log(objC);

console.log(objA.hasOwnProperty("a"));
console.log(objA.a);

console.log(objA.hasOwnProperty("b"));
console.log(objA.b);

console.log(objA.hasOwnProperty("c"));
console.log(objA.c);

console.log(objA.hasOwnProperty("x"));
console.log(objA.x);
 */

//=======================

const obj1 = {
  name: "obj1",
  showInfo() {
    console.log("obj1");
  },
};

const obj2 = {
  name: "obj2",
  __proto__: obj1,
  test() {
    console.log("test");
  },
};

const obj3 = {
  name: "obj3",
  __proto__: obj2,
  foo() {
    console.log("foo");
  },
};

const obj4 = {
  name: "obj4",
  __proto__: obj3,
  last() {
    console.log("last");
  },
};

console.log(obj4);
obj4.test();

const arr = [];
