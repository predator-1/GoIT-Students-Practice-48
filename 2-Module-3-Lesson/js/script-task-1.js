// Створіть масив genres з елементами Jazz і Blues.
// Додайте «Рок-н-рол» до кінця.
// Виведіть у консоль перший елемент масиву.
// Виведіть у консоль останній елемент масиву. Код має працювати для масиву довільної довжини.
// Видаліть перший елемент та виведіть його в консоль.
// Вставте «Country» та «Reggy» на початок масиву.

const genres = ['Jazz', 'Blues'];

genres.push('Rock-n-Roll');

console.log(genres);
console.log(genres[0]);
console.log(genres[genres.length - 1]);
console.log(genres.shift());
console.log(genres);
genres.unshift('Country', 'Reggy');
console.log(genres);
