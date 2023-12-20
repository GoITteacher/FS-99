/**
 * Контекст виконання функції
 *
 * - Ключове слово this
 * - Глобальний контекст
 * - Контекст методу об'єкта
 */

// function foo() {
//   console.log(this);
// }

// foo(10, 20, 30);

/**
 * Глобальний контекст
 */

// function foo() {
//   console.log("foo -> this", this);
// }

// foo();

/**
 * Контекст методу об'єкта
 */

// function foo() {
//   console.log(this);
// }

// const cat1 = {
//   name: "Marsik",
//   showThis: foo,
// };

// const cat2 = {
//   name: "Tom",
//   showThis: foo,
// };

// const cat3 = {
//   name: "Barsik",
//   showThis: foo,
// };

// cat3.showThis();

/**
 * Контекст методу об'єкта, но объявлена как внешняя функция.
 */

/* const product1 = {
  price: 123,
  productName: "Apple",
  showInfo() {
    console.log(this.productName);
  },
};

const obj2 = {
  price: 234,
  productName: "Orange",
  showInfo: product1.showInfo,
};

product1.showInfo();
obj2.showInfo(); */

// ================================

/* function drive() {
  // const this = obj2;
  console.log(this.age);
}

const obj1 = {
  name: "Vasya",
  age: 20,
  drive: drive,
};

const obj2 = {
  name: "Petya",
  age: 22,
  drive: drive,
};

obj1.drive();
obj2.drive(); */
// ================================
/* function showTag() {
  console.log("showTag -> this", this);
  console.log("showTag -> this.tag", this.tag);
}

showTag();

const mango = {
  tag: "Mango",
};

mango.showUserTag = showTag;
console.log("mango", mango);

mango.showUserTag(); */

/**
 * Вызов без контекста, но объявлена как метод объекта.
 */

// const poly = {
//   tag: "Poly",
//   showTag() {
//     console.log("showTag -> this", this);
//     // console.log("showTag -> this.tag", this.tag);
//   },
// };

// poly.showTag();

// const outerShowTag = poly.showTag;

// outerShowTag();

/**
 * Контекст в callback-функциях
 */

function foo(callback) {
  const obj = {
    name: "Volodka",
    test: callback,
  };

  obj.test();
}

function myCallback() {
  console.log(this);
}

foo(myCallback);
