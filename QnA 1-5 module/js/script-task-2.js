// Напишіть функцію
// makeCounter() - яка повертає об'єкт лічильник
// у якого є методи
// increment() - збільшити на 1
// decrement() - зменшити на 1
// reset() - скинути лічильник на 0
// show() - вивести поточне значення у консоль
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures

function makeCounter() {
  let counter = 0;
  return {
    increment() {
      return (counter += 1);
    },
    decrement() {
      return (counter -= 1);
    },
    reset() {
      return (counter = 0);
    },
    show() {
      return counter;
    },
  };
}

const counter = makeCounter();
console.log('counter', counter.increment());
console.log('counter', counter.decrement());
console.log('counter', counter.increment());
console.log('counter', counter.reset());
console.log('counter', counter.show());
console.log('counter', counter.increment());
console.log('counter', counter.increment());

const counter2 = makeCounter();
console.log('counter2', counter2.increment());
console.log('counter2', counter2.decrement());
console.log('counter2', counter2.increment());
