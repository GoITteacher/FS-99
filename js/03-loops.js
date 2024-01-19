const obj = {
  x: 10,
  y: 20,
  q: 30,
  t: 40,
};

/* 
keys()
['x', 'y', 'q', 't'] 
*/

/* 
values()
[10,20,30,40] 
*/

/* 
entries()
[
  ['x', 10],
  ['y', 20],
  ['q', 30],
  ['t', 40],
] 
*/

/* for (const [key, value] of Object.entries(obj)) {
  console.log(key, value);
} */

/**
 * Деструктуризація об'єкта в циклі
 */

const users = [
  {
    name: 'Kate',
    age: 10,
    isStudent: false,
  },
  {
    name: 'Alex',
    age: 10,
    isStudent: false,
  },
  {
    name: 'Mark',
    age: 10,
    isStudent: false,
  },
];

/* for (const user of users) {
  console.log(user.name, user.age);
} */

/* for (const { name, age } of users) {
  console.log(name, age);
} */

users.forEach(({ name, age }, index) => {
  console.log(index, name, age);
});
