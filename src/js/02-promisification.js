/*
 * Промісифікація:
 * - Функція, яка повертає проміс
 */

/* function foo() {
  const promise = new Promise((resolve, reject) => {
    resolve('hello');
  });
  return promise;
}

foo().then(res => {
  console.log('✅', res);
}); */
//=========================================

function createPromise(value, delay, isValid) {
  const promise = new Promise((resolve, reject) => {
    const data = { value, delay };
    setTimeout(() => {
      if (isValid) {
        resolve(data);
      } else {
        reject(data);
      }
    }, delay);
  });

  return promise;
}

/* for (let i = 0; i < 5; i++) {
  const delay = i * 1000;
  const isActive = Math.random() > 0.5; // true | false
  const promise = createPromise(i, delay, isActive);
  promise.then(onFullFiled, onRejected);
} */

//=========================================

function onFullFiled(res) {
  console.log('✅', res);
}

function onRejected(err) {
  console.log('❌', err);
}

//=========================================

// const p1 = createPromise('P1', 4000, true);
// const p2 = createPromise('P2', 500, false);
// const p3 = createPromise('P3', 1000, true);
// const p4 = createPromise('P4', 3000, true);

// const arr = [p1, p2, p3, p4];

// const resultPromise = Promise.all(arr);
// const resultPromise = Promise.allSettled(arr);
// const resultPromise = Promise.race(arr);

// resultPromise.then(onFullFiled, onRejected);

/* for (promise of arr) {
  promise.then(onFullFiled, onRejected);
} */

//=========================================

/*
 * Промісифікація «синхронних» функцій
 * - Promise.resolve()
 * - Promise.reject()
 */

/* function foo(arr) {
  arr = arr.filter(el => el > 10).map(el => el.toString());
  return Promise.reject(arr);
}

const result = foo([1]);

console.log(result); */
