/**
 * Створити об'єкт person1 з полем name та getName яка поверне поле name
 * Створити об'єкт person2 з полем name та присвоїти person2.getName = person1.getName
 * Вивести результат обох getName в консоль
 */

'use strict';

const person1 = {
  name: 'person1',
  getName() {
    return this.name;
  },
};

const person2 = {
  name: 'person2',
};

person2.getName = person1.getName;

// console.log(person2.getName());
// console.log(person1.getName());

// console.log(person1.getName.call(person2));

const getName = person1.getName;
console.log(getName.apply(person2));
