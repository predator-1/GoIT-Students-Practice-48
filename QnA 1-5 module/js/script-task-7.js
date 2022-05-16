// Ви запросили гостей і хочете порахувати їх на вході
// Гості іноді виходять з дому та повертаються
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Set

class House {
  #guests = new Set();

  addGuest(guest) {
    this.#guests.add(guest);
  }

  get count() {
    console.log(this.#guests);
    return this.#guests.size;
  }
}

const house = new House();
house.addGuest('Ivan');
house.addGuest('Dmytro');
house.addGuest('Olena');
console.log(house.count);
house.addGuest('Dmytro');
console.log(house.count);
