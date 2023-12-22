/**
 * Классы
 *  - Оголошення класу
 *  - Конструктор класу
 *  - Методи класу
 *  - Прототип екземпляру
 *  - Приватні властивості
 *  - Геттери і сеттери
 *  - Статичні властивості
 */

/* class User {
  name = "Default";
  age = 20;

  constructor() {
    console.log("Hello");
  }
}

const user1 = new User(); */

// ==========

/*
 class Car {
  #maxSpeed;

  constructor(color, model, price) {
    this.color = color;
    this.model = model;
    this.price = price;
    this.#maxSpeed = 250;
  }

  showInfo() {
    const info = `----------------------
Model: ${this.model}
Price: ${this.price}
Color: ${this.color}
Max speed: ${this.#maxSpeed}
----------------------`;

    console.log(info);
  }

  setSpeed(newSpeed) {
    if (newSpeed <= 250) this.#maxSpeed = newSpeed;
  }

  getSpeed() {
    return this.#maxSpeed;
  } 

  set maxSpeed(newSpeed) {
    console.log("Set new Speed");
    this.#maxSpeed = newSpeed;
  }

  get maxSpeed() {
    return `Max Speed: ${this.#maxSpeed}`;
  }

  get info() {
    return `----------------------
Model: ${this.model}
Price: ${this.price}
Color: ${this.color}
Max speed: ${this.#maxSpeed}
----------------------`;
  }
}

const car1 = new Car("red", "model S", 30000);
const car2 = new Car("blue", "model S", 35000);
const car3 = new Car("green", "Plaid", 50000);

car1.maxSpeed = 200;
console.log(car1.maxSpeed);

console.log(car1.info);
// car1.showInfo();
// car2.showInfo();
// car3.showInfo();
 */

// ================================

/* class User {
  constructor(userName, userAge) {
    this.country = "Ukraine";
    this.name = userName;
    this.age = userAge;
  }

  showInfo() {
    console.log("---------------");
    console.log("Name:", this.name);
    console.log("Age:", this.age);
    console.log("---------------");
  }
}

const user1 = new User("Max", 25);
const user2 = new User("Yaroslav", 22);

console.log(user1);
console.log(user2); */

// ==========

class Car {
  static #count = 0;

  constructor(model, price) {
    this.model = model;
    this.price = price;
    Car.#count += 1;
  }

  showInfo() {
    console.log("Model:", this.model);
    console.log("Price:", this.price);
    console.log("Make:", Car.make);
  }

  static get count() {
    return Car.#count;
  }
}

const car1 = new Car("S", 30);
const car2 = new Car("E", 35);
const car3 = new Car("Plaid", 60);
const car4 = new Car("Plaid", 60);
const car5 = new Car("Plaid", 60);
const car6 = new Car("Plaid", 60);
const car7 = new Car("Plaid", 60);

console.log(Car.count);
