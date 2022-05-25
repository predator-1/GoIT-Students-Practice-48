/**
 * Merge two list in one
 * without dublicates
 */

const lis = document.querySelectorAll('li');

const lisFiltered = [...lis].filter(
  (value, index, array) =>
    array.findIndex(
      findIndexValue =>
        findIndexValue.firstElementChild.getAttribute('src') ===
        value.firstElementChild.getAttribute('src'),
    ) === index,
);

const merged = document.createElement('ol');
lisFiltered.forEach(l => merged.append(l));

document.body.innerHTML = '';
document.body.append(merged);
