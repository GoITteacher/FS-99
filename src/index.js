/* import { Item } from './js/item';
import { User } from './js/user';
import { Product } from './js/product';

const user = new User();
const product = new Product();
const item = new Item();

console.log(user);
console.log(product);
console.log(item); */

// =============================
/* import { userQ, userX, userY } from './js/someData';

console.log(userQ);
console.log(userX);
console.log(userY); */
// =============================

/* import userData from './js/someData2';
console.log(userData); */

// =============================

// import { userQ, userX as myX, userY } from './js/someData';

// const userX = 10;
// console.log(userX, myX);

// =============================

/* import * as data from './js/someData';
console.log(data); */

// =============================

/* import data, { t1, t2, t3 } from './js/someData3';
import { t1, t2, t3 } from './js/someData3';
import data from './js/someData3'; */

// =============================

/* import * as myData from './js/someData3';
console.log(myData); */

// =============================

// import './js/header';

// =============================
/* 
import { v4 as generateId } from 'uuid';

console.log(generateId());
console.log(generateId());
console.log(generateId());
console.log(generateId());
 */
// =============================
/* import { faker } from '@faker-js/faker';

function createRandomUser() {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

const user1 = createRandomUser();
const user2 = createRandomUser();
const user3 = createRandomUser();
const user4 = createRandomUser();

console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4); */

// =======================================

/* import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css'; */

// ========================================

import Notify from 'simple-notify';
import 'simple-notify/dist/simple-notify.min.css';

function pushNotify(userText) {
  new Notify({
    status: 'warning',
    title: 'Warning',
    text: userText,
    effect: 'fade',
    speed: 300,
    customClass: null,
    customIcon: null,
    showIcon: true,
    showCloseButton: false,
    autoclose: true,
    autotimeout: 3000,
    gap: 20,
    distance: 20,
    type: 1,
    position: 'right top',
  });
}

pushNotify('Hello');
