// Перепиши функцію так, щоб вона приймала один
// об'єкт параметрів замість набору незалежних аргументів.

function getBotReport({
  companyName,
  bots: { repair: repairBots, defence: defenceBots },
}) {
  return `${companyName} has ${repairBots + defenceBots} bots in stock`;
}

// Was
// console.log(getBotReport('Cyberdyne Systems', 150, 50));

// Expected
console.log(
  getBotReport({
    companyName: 'Cyberdyne Systems',
    bots: {
      repair: 150,
      defence: 50,
    },
  }),
); // "Cyberdyne Systems has 200 bots in stock"
