/**
 * Метод flatMap
 */

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const tags = tweets.flatMap(tweet => tweet.tags);
// console.log(tags);



// const foo = () => {
//   console.log("foo");
// }


// const foo2 = (callback) => {
//   callback();

//   return () => {
    
//   }
// }

// foo2(foo)


// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];

// const totalPlayedTimes = 
//     players.map(player => player.playtime / player.gamesPlayed);


// let totalAveragePlaytimePerGame = 0;

// totalPlayedTimes.forEach(totalTime => totalAveragePlaytimePerGame += totalTime);
// totalPlayedTimes.forEach(totalTime => totalAveragePlaytimePerGame += totalTime);


// console.log(totalAveragePlaytimePerGame);

// const totalTime = players.reduce((acc, player) => {
//   return acc + (player.playtime / player.gamesPlayed)
// }, 0)

// console.log(totalTime);