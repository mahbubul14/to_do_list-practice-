import _ from 'lodash';
import './style.css';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());

const input = document.getElementById('input');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('list');

addBtn.addEventListener('click', () => {
  const newList = document.createElement('li');
  newList.innerHTML = input.value;
  list.appendChild(newList);

  newList.addEventListener('click', () => {
    newList.style.textDecoration = 'line-through';
  });

  newList.addEventListener('dblclick', () => {
    list.removeChild(newList);
  });
});
