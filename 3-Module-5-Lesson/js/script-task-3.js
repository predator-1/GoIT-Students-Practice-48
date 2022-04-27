// Напишіть ф-цію calcTotalPrice(stones, stoneName),
// яка приймає масив об'єктів та рядок під назвою каменю.
// Ф-ція рахує і повертає загальну вартість каміння з таким ім'ям,
// ціною та кількістю з об'єкта

const stones = [
  { name: 'Изумруд', price: 1300, quantity: 4 },
  { name: 'Бриллиант', price: 2700, quantity: 3 },
  { name: 'Сапфир', price: 400, quantity: 7 },
  { name: 'Щебень', price: 200, quantity: 2 },
];

function calcTotalPrice(stones, stoneName) {
  for (const stone of stones) {
    if (stone.name === stoneName) {
      return stone.price * stone.quantity;
    }
  }

  return 0;
}

console.log(calcTotalPrice(stones, 'fwefew'));
