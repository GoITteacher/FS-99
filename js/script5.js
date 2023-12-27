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
    year: 2000,
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
    isSportCar: true,
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
    year: 2015,
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
    year: 2005,
  },
];

const task1 = (type) => {
  return cars.filter((car) => {
    return car.type === type;
  }).length;
};

const task2 = (color, year) => {
  return cars.filter((car) => {
    const isValidColor = car.color === color;
    const isValidYear = car.year === year;
    return isValidColor && isValidYear;
  });
};

const task3 = () => {
  let total = cars.reduce((acc, car) => {
    return acc + car.price;
  }, 0);

  return total / cars.length;
};

console.log(task3());

/* 1. Порахувати загальну кількість машин усіх типів.
1. Знайти всі машини певного типу (наприклад, SUV).
1. Знайти всі машини певного кольору та року випуску.
1. Порахувати середню ціну всіх машин.
1. Знайти всі машини, у яких кількість на складі більша за 0.
1. Знайти всі машини з ціною менше 30000 та роком випуску після 2020 року.
1. Порахувати сумарну кількість всіх машин заданої марки.
1. Відсортувати машини за кількістю на складі (від найбільшої до найменшої).
1. Знайти всі машини, які не є спортивними та доступні для продажу.
1. Порахувати загальну вартість всіх машин складі.
1. Знайти всі машини певного типу та кольору.
1. Перевірити, чи є хоч одна машина зеленого кольору.
1. Створити новий масив, що містить лише назви моделей усіх машин. */
