// import _ from 'lodash';
import './style.css';

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
