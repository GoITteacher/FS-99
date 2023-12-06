/**
 * Об'єкти
 *
 * - Створення об'єкта
 * - Вкладені властивості
 * - Доступ до властивостей через крапку
 * - Доступ до вкладених властивостей
 * - Доступ до властивостей через квадратні дужки
 * - Зміна значення властивостей
 * - Додавання властивостей
 */

/* const user = {
  name: "Max",
  age: 20,
  isStudent: false,
  address: {
    city: "Dnipro",
    country: "Ukraine",
    location: {
      x: 10,
      y: 30,
    },
  },
};
 */
// user['address']['location'].x
// user.address['location'].x

// const key = "age";
// console.log(user[true ? "" : ""]);
// console.log(user.key);

// console.log(user.isAdmin);
// console.log(user.isStudent);
// console.log(user.name);
// console.log(user.age);

/* const playlist = {
  name: "My amazing playlist",
  rating: 5,
  tracks: ["track-1", "track-2", "track-3"],
  isFavorite: true,
}; */

// playlist.name = "NewName";
// playlist["rating"] = 3;
// playlist.tracks[1] = "test";

// playlist.newProps1 = "HELLO WORLD1";
// playlist.newProps2 = "HELLO WORLD2";
// playlist.newProps3 = "HELLO WORLD3";

// delete playlist;

/**
 * -----------------------------------
 */

/* const playlist = {
  name: "My amazing playlist",
  rating: 5,
  tracks: ["track-1", "track-2", "track-3"],
  isFavorite: true,
}; */

// const propertyName = "tracks";

// playlist[propertyName] = [];

// console.log(playlist);

// delete playlist[propertyName];

// ======================

/* const playlist = {
  name: "My amazing playlist",
  rating: 5,
  tracks: ["track-1", "track-2", "track-3"],
  isFavorite: true,
};

playlist.author = {
  name: "awd",
  age: "sefse",
}; */

// playlist.author.test = "data";

// playlist.author.name = "";

// console.log(playlist);

/**
 * -----------------------------------
 */

// function foo(values) {
//   console.log(values);
//   console.log(values.a);
//   console.log(values.b);
// }

// const obj = {
//   a: "5312",
//   b: "2342",
// };

// foo(obj);

// ==========================

function showUserInfo(obj) {
  console.log(obj);
  console.log("\n\n-------------------");
  console.log(`name: ${obj.name}`);
  console.log(`age: ${obj.age}`);
  console.log(`city: ${obj.city}`);
  console.log("-------------------");

  obj.name = "test";
}

const user1 = {
  test1: "Max",
  hello: 12,
  value: "Lviv",
};

showUserInfo(user1);

console.log(user1);

// ========
