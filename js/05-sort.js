/**
 * Метод toSorted
 *
 * - Свій порядок сортування чисел
 * - Свій порядок сортування рядків
 * - Сортування об'єктів
 *
 * За замовчуванням:
 * - сортує за зростанням
 * - приводить елементи до рядка і сортує за [Unicode](https://unicode-table.com/en/)
 */

// const arr = [1, 3, 5, 6, 8, 2, 3, 5, 7];

// const result = arr.toSorted((right, left) => {
//   return left - right;
// });

// console.log(result);

/*

/* const numbers = [1, 9, 6, 2, 3];

const sorted = numbers;
console.log("sorted ", sorted);

const letters = ["b", "B", "a", "A"];
console.log("letters", letters); */

/**
 * compareFunction - функція порівняння (callback)
 * Елементи масиву сортуються відповідно до її значення, що повертається
 */

/* console.log(
  numbers.toSorted((curEl, nextEl) => {
    return nextEl - curEl;
  })
);

const descSortedNumbers = numbers;
const ascSortedNumbers = numbers;
console.log("descSortedNumbers", descSortedNumbers);
console.log("ascSortedNumbers", ascSortedNumbers);
 */
/**
 * Сортування масиву об'єктів
 */
const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, online: true },
  { id: "player-3", name: "Aiwi", timePlayed: 230, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, online: false },
  { id: "player-5", name: "Chelsey", timePlayed: 80, online: true },
];

// players.sort((a, b) => {
//   return a.timePlayed - b.timePlayed;
// });

players.sort(({ id, online, name }, b) => {
  return name.localeCompare(b.name);
});

// console.table(players);

/* // За ігровим часом
const sortedByBestPlayers = players;
console.table(sortedByBestPlayers);

const sortedByWorstPlayers = players;
console.table(sortedByWorstPlayers);

// По первой букве имени
const byName = players;
console.table(byName);
 */

// =======

// const str1 = "A";
// const str2 = "A";

// console.log(str1.localeCompare(str2));

// =================
