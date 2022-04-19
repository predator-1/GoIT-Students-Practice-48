// Напиши скрипт, який «розгортає» рядок
// (зворотний порядок букв) і виводить його в консоль.

const string = 'Welcome to the future';

// console.log(string.split('').reverse().join(''));

let reversed = '';

for (let i = string.length - 1; i > -1; i -= 1) {
  reversed += string[i];
}

console.log(reversed);
