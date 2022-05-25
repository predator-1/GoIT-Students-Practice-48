/**
 * Set class 'red-score' to score under 10
 * Set class 'green-score' to other score
 */

const table = document.querySelector('table');

const lines = table.querySelectorAll('tr');
lines.forEach(l => {
  const tds = l.querySelectorAll('td');
  if (tds.length === 0) {
    return;
  }

  if (parseInt(tds[1].textContent) < 10) {
    l.classList.add('red-score');
  } else {
    l.classList.add('green-score');
  }
});
