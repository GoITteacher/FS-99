/**
 * Наслідування класів
 *
 *  - extends
 *  - Конструктор дочірнього класу (super)
 *  - Методи дочірнього класу
 */

/* class Animal {
  static #count = 0;
  constructor(name, age, eyes, color) {
    this.eyes = eyes;
    this.name = name;
    this.age = age;
    this.color = color;
    Animal.#count += 1;
  }

  sleep() {
    console.log("sleep");
  }

  eat() {
    console.log("Nyam Nyam");
  }

  static get count() {
    return Animal.#count;
  }
}

class Dog extends Animal {
  constructor(name, color, age) {
    super(name, age, 2, color);
    this.teeth = 16;
  }

  sayHello() {
    console.log(`${this.name} says - Woof Woof`);
  }
}
class Cat extends Animal {
  constructor(name, color, age) {
    super(name, age, 2, color);
    this.teeth = 12;
  }

  sayHello() {
    console.log(`${this.name} says - Myaw Myaw`);
  }

  scratch() {
    console.log("|||");
  }
}
class Bird extends Animal {
  constructor(name, color, age) {
    super(name, age, 2, color);
    this.wings = 2;
  }

  sayHello() {
    console.log(`${this.name} says - 4irik 4irik`);
  }

  fly() {
    console.log("---");
  }
} */

// const dog = new Dog("Lord", "white", 3);
// const cat = new Cat("Marsik", "white", 2);
// const bird = new Bird("Kesha", "green", 1);

// dog.sleep();
// cat.sleep();
// bird.sleep();

// console.log(Animal.count);

// ============================

class User {
  constructor(obj) {
    this.name = obj.name;
    this.age = obj.age;
    this.gender = obj.gender;
    this.isStudent = obj.isStudent;
    this.phoneNumber = obj.phoneNumber;
  }
}

const data = {
  gender: "male",
  name: "Max",
  age: 12,
  phoneNumber: "2234234234",
  isStudent: true,
};

const user = new User(data);

console.log(user);
