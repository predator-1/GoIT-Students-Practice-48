/**
 * Створіть функцію hostGuests яка поверне ім'я будинку та гостей у ньому
 * Викличте її за допомогою call і apply поставивши контекст і гостей як аргумент
 */

const guests = ['Anna', 'Jack', 'Jimm'];

const hostGuest = function (...currentGuest) {
  return `${this.house} with ${currentGuest.join(', ')}`;
};

const place = {
  house: 'Palace',
};

// console.log(hostGuest.apply(place, guests));
// console.log(hostGuest.call(place, ...guests));
console.log(hostGuest.apply(place, [...guests, 'Igor']));
// console.log(hostGuest.call(place, ...guests, 'Igor'));
