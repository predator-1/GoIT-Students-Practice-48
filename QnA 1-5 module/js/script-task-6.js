// Створіть записник куди можна
// внести ім'я та номер телефону людини
// Знайти номер на ім'я
// показати кількість контактів
// видалити контакт на ім'я
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

class Contacts {
  #contacts = new Map();

  add(name, phone) {
    this.#contacts.set(name, phone);
  }
  findContact(name) {
    if (this.#contacts.has(name)) {
      return this.#contacts.get(name);
    }
  }
  get count() {
    console.log(this.#contacts);
    return this.#contacts.size;
  }

  removeContact(name) {
    this.#contacts.delete(name);
  }
}

const contacts = new Contacts();

contacts.add('Anna', 123123);
contacts.add('Dmytro', 2342424);
console.log(contacts.count);
console.log(contacts.findContact('Dmytro'));
contacts.add('Dmytro', 999776);
console.log(contacts.findContact('Dmytro'));
contacts.removeContact('Dmytro');
console.log(contacts.count);
