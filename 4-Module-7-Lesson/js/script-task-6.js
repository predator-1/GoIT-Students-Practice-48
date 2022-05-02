// Виконайте рефакторинг коду за допомогою inline стрілочних функцій 'task 3'.

// Напишіть функцію each(array, callback), яка є першим параметром
// очікує масив, а другим - функцію, яка застосовується до кожного елемента
// масиву. Функція each повинна повернути новий масив,
// Елементами якого будуть результати виклику коллбека.

const each = (array, callback) => {
  const newArr = [];
  for (const el of array) {
    newArr.push(callback(el));
  }
  return newArr;
};

console.log(each([64, 49, 36, 25, 16], value => value * 2));
console.log(each([64, 49, 36, 25, 16], value => value - 10));
console.log(each([64, 49, 36, 25, 16], value => Math.sqrt(value)));
console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.ceil(value)));
console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.floor(value)));
