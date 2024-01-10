/*
 * Створюємо та додаємо колекцію
 */

// console.log(myContainer);

// const str = `<div>
// <h1>Hello World</h1>
// <ul>
//   <li>1</li>
//   <li>2</li>
//   <li>3</li>
//   <li>4</li>
// </ul>
// </div>`;

// myContainer.innerHTML = str;

// myContainer.innerHTML = '';
// ======================================

const options = [
  { label: 'червоний', color: '#F44336' },
  { label: 'зелений', color: '#4CAF50' },
  { label: 'синій', color: '#2196F3' },
  { label: 'сірий', color: '#607D8B' },
  { label: 'рожевий', color: '#E91E63' },
  { label: 'індіго', color: '#3F51B5' },
];

const myContainer = document.querySelector('.js-box');

/*
 * Пишемо функцію для створення розмітки колорпікера
 */

function colorsTemplate() {
  const markup = options
    .map(obj => {
      return `<div class="color-picker__option">
  <div style="background-color: ${obj.color}" class="box"></div>
  <p>${obj.label}</p>
</div>`;
    })
    .join('\n\n');

  return markup;
}

const markup = colorsTemplate();
myContainer.insertAdjacentHTML('afterbegin', markup);
