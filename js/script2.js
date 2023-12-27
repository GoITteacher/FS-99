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

// console.table(cars);

/* const task1 = (year) => {
  let result = cars
    .filter((car) => {
      return car.year === year;
    })
    .map((car) => {
      return car.model;
    });

  return result;
};

task1(2020); */

/* 
1. Знайти автомобілі дорожчі 5000
1. Знайти авто зеленого кольору
1. Знайти усі спорткари
1. Порахувати кількість авто 2022 року
1. Знайти всі машини з ціною вище 50000.
1. Знайти всі машини червоного кольору.
*/

/* const task2 = (minPrice) => {
  return cars
    .filter((car) => {
      return car.price > minPrice;
    })
    .map((car) => {
      const obj = {
        make: car.make,
        mode: car.model,
        price: car.price,
        year: car.year,
      };
      return obj;
    });
};

console.table(task2(27000)); */

/* const task3 = (color) => {
  return cars
    .filter((car) => car.color === color)
    .filter((car) => car.isSportCar)
    .map((car) => car.make);
};

console.log(task3("green"));
console.log(task3("red")); */

// const task4 = (year) => {
//   const result = cars.filter((car) => car.year === year);
//   return result.length;
// };
