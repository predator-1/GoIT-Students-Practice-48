/**
 * Create TODO list
 */

const listRef = document.querySelector('ol');
const inputRef = document.querySelector('#add-input');
const addBtn = document.querySelector('#add-btn');

const getListElem = text => `<li>${text}</li>`;

addBtn.addEventListener('click', () => {
  const text = inputRef.value;
  listRef.insertAdjacentHTML('beforeend', getListElem(text));
  inputRef.value = '';
});
