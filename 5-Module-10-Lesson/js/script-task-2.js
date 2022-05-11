// Напиши клас Storage, який створює об'єкти для управління
// складом товарів. При виклику отримуватиме один аргумент - початковий
// масив товарів, і записуватиме його у властивість items.

// Додай методи класу:

// getItems() – повертає масив товарів.
// addItem(item) - отримує новий товар та додає його до поточних.
// removeItem(item) - отримує товар і, якщо є, видаляє його з поточних.

class Storage {
  constructor(items) {
    this._items = items;
  }

  getItems() {
    return this._items;
  }

  addItem(item) {
    this._items.push(item);
  }

  removeItem(item) {
    const index = this._items.findIndex(value => value === item);
    if (index > -1) {
      this._items.splice(index, 1);
    }
  }
}

const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

console.table(storage.getItems()); // [ '🍎', '🍋', '🍇', '🍑' ]

storage.addItem('🍌');
console.table(storage.getItems()); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

storage.removeItem('🍋');
console.table(storage.getItems()); // [ '🍎', '🍇', '🍑', '🍌' ]
