/**
 * Array max value
 */

const salaries = [1000, 5000, 1500, 0, -1000, 300];

function max(entries) {
  return Math.max(...entries);
}

console.log(max(salaries));
