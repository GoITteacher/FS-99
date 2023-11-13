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

class Car {
  static description = "This is a Car class thingy";

  static logInfo(carObj) {
    console.log("Car.logInfo -> carObj", carObj);
  }

  #model;
  #price;

  constructor({ brand, model, price } = {}) {
    this.brand = brand;
    this.#model = model;
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;
  }

  get model() {
    return this.#model;
  }

  set model(newModel) {
    this.#model = newModel;
  }
}

const carInstance = new Car({
  brand: "Audi",
  model: "Q7",
  price: 35000,
});

console.log(carInstance.model);
carInstance.model = "Q5";
console.log(carInstance.model);

console.log(carInstance.price);
carInstance.price = 20000;
console.log(carInstance.price);

console.log(carInstance);
