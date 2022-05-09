/**
 * Bind
 *
 * Створіть метод counter який буде з this брати 'i' і збільшувати його на одиницю.
 * Після повертати 'i'.
 * Використовуйте bind щоб встановити змінної 'i' різні значення
 *
 * Виведіть результат у консоль
 */

const counter = function () {
  return (this.i += 1);
};

const conter1 = counter.bind({ i: 0 });
conter1();
console.log(conter1());
