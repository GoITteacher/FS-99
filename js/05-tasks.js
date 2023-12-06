/**
 * Напиши скрипт, який для об'єкта user, послідовно:
 * - додає поле mood зі значенням 'happy'
 * - замінює значення hobby на 'skydiving'
 * - замінює значення premium на false
 * - виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
 */

/* const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

for (const key of Object.keys(user)) {
  console.log(`${key}: ${user[key]}`);
} */

/**
 * У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
 * підсумовування всіх зарплат і збережіть результат у змінній sum.
 * Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.
 */

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;
for (const salary of Object.values(salaries)) {
  sum += salary;
}

console.log(sum);

// =======================================

/* 
Якщо значення властивості — це масив, то в нашому прикладі вище звернення до цього масиву буде: ****user.hobbies. не зрозумів цю частину конспекту
*/

// const user = {
//   name: "123",
//   friends: ["friend1", "friend1", "friend1", "friend1"],
// };

// user.friends[3];

// ==================

/* Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості. Функція повинна повернути масив усіх значень властивості з таким ім'ям з кожного об'єкта в масиві products. Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.

Оголошена функція getAllPropValues(propName)
Виклик getAllPropValues("name") повертає ["Radar", "Scanner", "Droid", "Grip"]
Виклик getAllPropValues("quantity") повертає [4, 3, 7, 9]
Виклик getAllPropValues("price") повертає [1300, 2700, 400, 1200]
Виклик getAllPropValues("category") повертає []

*/

const products = [
  { name: "product1", price: 100, amount: 0 },
  { name: "product2", price: 100, amount: 5 },
  { name: "product3", price: 100, amount: 1 },
  { name: "product4", price: 100, amount: 4 },
  { name: "product5", price: 100, amount: 8 },
  { name: "product6", price: 100, amount: 2 },
  { name: "product7", price: 100, amount: 5 },
  { name: "product8", price: 100, amount: 6 },
];

function getAllPropValues(propName) {
  const values = [];

  for (const product of products) {
    if (product[propName] !== undefined) {
      values.push(product[propName]);
    }
  }

  return values;
}

const result = getAllPropValues("price");

console.log(result);
