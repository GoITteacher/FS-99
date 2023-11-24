/**
 * Методи рядків
 *
 *  - slice
 *  - toLowerCase/toUpperCase
 *  - includes
 *  - startsWith/endsWith
 *  - indexOf
 *  - trim
 */

// const username = "Jacob Mercer";
// const result = username.slice(-4, -1);
// console.log(result);
// console.log(username);

// =============================
// const username = "Jacob Mercer Test";
// const firstIndex = 6;
// const lastIndex = 13;

// const myWord = username.slice(firstIndex, lastIndex);

// console.log(myWord);
// =============================================

// const username = "Volodymyr";

// const result1 = username.toUpperCase();
// const result2 = username.toLowerCase();

// console.log(result1);
// console.log(result2);
// console.log(username);

// =============================================

// const banWord1 = "spam";
// const banWord2 = "***";
// const banWord3 = "*****";

// const text = "Hello world its **";

// const res1 = text.toLowerCase().includes(banWord1);
// const res2 = text.toLowerCase().includes(banWord2);
// const res3 = text.toLowerCase().includes(banWord3);

// const result = res1 || res2 || res3;

// console.log(result);

// ==============

// const username = "Username: " + prompt("enter your name");
// 'Username: '
// console.log(username.includes(banWord1, 10));

// ===================

// const phone = prompt("Enter your phoneNumber");

// if (phone.startsWith("+380")) {
//   console.log("Hello");
// } else {
//   console.log("...");
// }

// const str = "awdawd.js";
// console.log(str.endsWith(".js"));

// ===================================

// const str = "Some Words ewdaw awdawd awd";

// const firstIndex = str.indexOf(5);
// const lastIndex = str.indexOf("5", firstIndex + 1);

// console.log(str.slice(firstIndex + 1, lastIndex));
// console.log(lastIndex);

// const result = str.indexOf("5");
//
// console.log(result);

// const lastIndex = str.lastIndexOf(" ");
// const firstIndex = str.lastIndexOf(" ", lastIndex - 1);

// console.log(str.slice(firstIndex + 1, lastIndex));

// const result = str.indexOf("5");

// =================================

// const str = "Hello User Volodymyr";
// console.log(str.trim());

// let str = "Hello User Volodymyr";
// str = str.replace(" ", ",");

// console.log(str);

// =============================

function getUserName() {
  const user = prompt("Enter you first name and last name").trim();
  const index = user.indexOf(" ");
  const firstName = user.slice(0, index);
  const lastName = user.slice(index + 1);

  console.log(firstName);
  console.log(lastName);
}

getUserName();
