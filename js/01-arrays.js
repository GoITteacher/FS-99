/**
 * Масиви
 *
 * - Створення масиву
 * - Доступ до елементів
 * - Перевизначення значення елемента
 * - Довжина масиву
 * - Індекс останнього елемента
 * - Перевизначення
 */

// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];
// console.table(courses);

// console.log(courses[3]);

const x1 = ["book1", "book2", "book3"];
const x2 = ["book4", "book5", "book6", "book7", "book8", "Test"];

// console.log(x1[2]);

// x1[1] = "New Book";

// x1[1] = "Test";

// console.log(x1);

console.log(x1.length);
console.log(x2.length);

const lastIndex = x2.length - 1;
const lastElem = x2[lastIndex];

console.log(lastIndex);
x2[lastIndex] = "LAST ELEMENT";
console.log(x2);
