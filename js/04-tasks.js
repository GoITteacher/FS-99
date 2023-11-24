// function xmtree(len) {
//   let str = "";
//   for (let i = 1; i <= len; i++) {
//     const left = " ".repeat(len - i) + "*".repeat(i);
//     const right = "*".repeat(i);
//     str += left + right + "\n";
//   }
//   console.log(str);
// }

// awdawd.

// function getFileName(file) {
//   const dotIndex = file.indexof(".");
//   if (dotIndex !== -1) {
//     return file.slice(0, dotIndex);
//   } else {
//     return file;
//   }
// }

/* 

*
**
***
****


*/

// xmtree(10);

/**
 * Напиши цикл for, який виводить у консоль браузера
 * числа за зростанням від a до b, але тільки якщо число кратне 5.
 */

const a = 100;
const b = 20;

/*
 * Напиши скрипт, який підраховує суму всіх парних чисел,
 * які входять в діапазон чисел у змінних від min до max.
 * Наприклад, якщо min=0 и max=5, то діапазон 0-5, і в ньому два парних числа - 2 і 4, їх сума 6.
 */

const min = 0;
const max = 5;
// let total = 0;

//

// const currentNumber = 5;
// let total = 0;
// for (let i = 0; i < currentNumber; i++) {
//   console.log(`${total} + ${i} = ${total + i}`);
//   total += i;
// }

// console.log("Result", total);

// Як правильно в циклі for вказувати декілька ініціалізацій, декілька ітерацій? В яких випадках ініціалізація, умова та ітерація є необов"язковими, та як це правильно прописати?

// for (let i = 0; i < 10 && k > 20; i++, k++) {
//   i++;
// }

// console.log(j);

/* як виконати це завдання ? Доповни код таким чином, щоб у змінну number записувалося перше число у проміжку від start до end, яке ділиться на 5 без остачі. я не розумію як це виконати ? */

const start = 123;
const end = 344;
let number;

for (let i = start; i <= end; i++) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
}

console.log(number);
