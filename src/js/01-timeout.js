/*
 * Метод window.setTimeout(callback, delay, args)
 */

/* for (let i = 3; i > 0; i--) {
  const delay = i * 1000;
  setTimeout(() => {
    console.log('Timeout', i);
  }, delay);
} */

// ====================================

/* for (let i = 0; i < 3; i++) {
  setTimeout(test, i * 1000, i);
}

function test(i) {
  console.log('Timeout', i);
} */

// =====================================

/*
 * Очищення таймаута за допомогою clearTimeout(timeoutId)
 */

setTimeout(() => {
  console.log('Hello');
}, 5000);

const id = setTimeout(() => {
  console.log('The end!');
}, 3000);

console.log(id);

clearTimeout(id);
