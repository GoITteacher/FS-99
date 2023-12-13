
// function getUser(showMessage) {
//   showMessage();

//   return {
//     name: "Oleh",
//     age: 23
//   }
// }



// function helloMessage() {
//   console.log("HELLO");
// }

// getUser(helloMessage)


// function foo2(callback) {
//   callback()

//   console.log(callback === helloMessage);
// };


// foo2(helloMessage);


// function showDataBaseError() {
//   console.error("Data base is not working");
// }

// function showNotAuthorizedError() {
//   console.error("User is not authorized");
// }


// function fetchUser(onError, onSuccess) {
//   const dataBaseUser = {
//     name: "Ivan",
//     age: 26
//   };

//   if (!dataBaseUser) {
//     onError();
//   } else {
//     onSuccess();
//     return dataBaseUser;
//   }
// }



// function fetchUserAvatar(onError) {
//   // const dataBaseAvatar = "https://www.com/avatar.jpg";
//   const dataBaseAvatar = null;

//   if (!dataBaseAvatar) {
//     onError();
//   } else {
//     return dataBaseAvatar;
//   }
// }


// const user = fetchUser(showDataBaseError, function () {
//   console.log("Everything is good");
// });
// const userAvatar = fetchUserAvatar(showDataBaseError);

//
//
//
//
//

// fetchUser(showDataBaseError, function () {
//   console.log("Move to user page");
// });

// fetchUserAvatar(showNotAuthorizedError);



/**
 * Функція зворотнього виклика (callback)
 *
 * - Функція як значення
 * - Колбек-функції
 * - Інлайн-колбеки
 */

// function fnA(callback) {
//   const result = callback();
//   console.log(result);
// }


// fnA(function () {
//   return "HELLO HOW ARE YOU"
// })

/**
 * Функція calc(a, b, callback)
 */

// function calc(a, b) {}

// calc(2, 3);

// calc(10, 8);

/**
 * Напишіть функцію each(array, callback), яка першим параметром очікує масив,
 * а другим - функцію, яка застосовується до кожного елемента масиву. Функція
 * each повинна повернути новий масив, елементами якого будуть
 * результати виклику коллбека.
 */

// function each(array, callback) {
//   const result = [];

//   for (const number of array) {
//     const newNumber = callback(number);
//     result.push(newNumber);
//   }

//   return result;
// }

// console.log(
//   each([64, 49, 36, 25, 16], value => value * 2)
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   })
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   })
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   })
// );
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], (value) => Math.floor(value))
);
