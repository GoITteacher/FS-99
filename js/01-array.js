/**
 * Масив об'єктів
 *
 * - Перебор масива
 * - Пошук об'єкта за значенням властивості
 * - Колекція значень властивості
 */

/* const friends = [
  { name: "Mango", online: false, price: 12 },
  { name: "Kiwi", online: true, price: 25 },
  { name: "Poly", online: false, price: 34 },
  { name: "Ajax", online: false, price: 10 },
]; */

/**
 * Пошук друга за іменем
 */

// function findFriendByName(allFriends, friendName) {
//   debugger;
//   for (const friend of allFriends) {
//     if (friend.name === friendName) {
//       return friend;
//     }
//   }
// }

// console.log(findFriendByName(friends, "Poly"));
// console.log(findFriendByName(friends, "Chelsy"));

/**
 * Отримуємо імена всіх лрузів
 */
// function getAllNames(allFriends) {
//   const result = [];
//   for (const friend of allFriends) {
//     const obj = {
//       name: friend.name,
//       price: friend.price,
//     };

//     result.push(obj);
//   }
//   return result;
// }

// console.log(getAllNames(friends));

/**
 * Отримуємо імена тільки тих друзів, які зараз онлайн
 */

const friends = [
  { name: "Mango", online: false, price: 12 },
  { name: "Kiwi", online: true, price: 25 },
  { name: "Poly", online: false, price: 34 },
  { name: "Ajax", online: true, price: 10 },
];

// function getOnlineFriends(allFriends) {
//   const result = [];

//   for (const item of friends) {
//     if (item.online) {
//       result.push(item.name);
//     }
//   }

//   return result;
// }

// console.log(getOnlineFriends(friends));

// ================================

// function updatePrice(arr, x) {
//   for (let i = 0; i < arr.length; i += 1) {
//     arr[i].price = Math.round(arr[i].price * x);
//   }
// }
// updatePrice(friends, 1.5);
// console.log(friends);

/**
 * Напишіть функцію calcTotalPrice(stones, stoneName),
 * яка приймає масив об'єктів та рядок з назвою каменю.
 * Функція рахує і повертає загальну вартість каміння з
 * таким ім'ям, ціною та кількістю з об'єкта
 */

const stones = [
  { name: "Смарагд", price: 1300, quantity: 4 },
  { name: "Діамант", price: 2700, quantity: 3 },
  { name: "Сапфір", price: 400, quantity: 7 },
  { name: "Щебінь", price: 200, quantity: 2 },
];

/* function calcTotalPrice(stones, stoneName) {
  for (const elem of stones) {
    if (elem.name === stoneName) {
      const obj = {
        name: elem.name,
        quantity: elem.quantity,
        totalPrice: elem.price * elem.quantity,
      };
      return obj;
    }
  }
} */

// function getInfoByStoneName(stones, stoneName) {
//   for (const elem of stones) {
//     if (elem.name === stoneName) {
//       const str = `Name: ${elem.name}
// Quantity: ${elem.quantity}
// Total price: ${elem.price * elem.quantity}`;
//       return str;
//     }
//   }
// }

// console.log(calcTotalPrice(stones, "Щебінь"));
// console.log(getInfoByStoneName(stones, "Щебінь"));
