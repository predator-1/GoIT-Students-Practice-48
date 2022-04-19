// Напиши скрипт який виводить у консоль усі
// слова рядка крім першого та останнього.
// Результуючий рядок не повинен починатися або закінчуватися
// пробілом. Скрипт повинен працювати для будь-якого рядка.

const string = 'Welcome to the future';

// const words = string.split(' ');

// console.log(words.slice(1, words.length - 1));

// console.log(words);

console.log(string.split(' ').slice(1, -1));
