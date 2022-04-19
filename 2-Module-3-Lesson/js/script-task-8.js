// Напиши скрипт пошуку найменшого числа у масиві.
// Код повинен працювати для будь-якого масиву чисел.
// Використовуй цикл для вирішення задачі.

const numbers = [2, 17, 94, 1, 23, 37];
// let min;
// for (let num of numbers) {
//   if (min === undefined) {
//     min = num;
//     continue;
//   }

//   if (min > num) {
//     min = num;
//   }
// }
// console.log(min);

let min = numbers[0];
for (let i = 1; i < numbers.length; i += 1) {
  if (min > numbers[i]) {
    min = numbers[i];
  }
}

console.log(min);
