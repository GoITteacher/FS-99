const STORAGE_KEY = 'user-data';

const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea');

form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const name = form.elements.name.value;
  const message = form.elements.message.value;

  const data = {
    name,
    message,
  };

  console.log(data);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
}
function onFormInput() {
  const name = form.elements.name.value;
  const message = form.elements.message.value;

  const data = {
    name,
    message,
  };

  saveToLS(STORAGE_KEY, data);
}

function saveToLS(key, value) {
  const zip = JSON.stringify(value);
  localStorage.setItem(key, zip);
}

function loadFromLS(key) {
  const zip = localStorage.getItem(key);
  try {
    return JSON.parse(zip);
  } catch {
    return zip;
  }
}

function init() {
  const data = loadFromLS(STORAGE_KEY) || {};
  form.elements.name.value = data.name || 'Anonym';
  form.elements.message.value = data.message || '';
}

init();
