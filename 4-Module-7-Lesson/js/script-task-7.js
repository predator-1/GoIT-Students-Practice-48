// refactoring with 'forEach'

function logItems(items) {
  // console.log(items);
  // for (let i = 0; i < items.length; i += 1) {
  //   console.log(`${i + 1} - ${items[i]}`);
  // }
  // items.forEach((elem, i) => console.log(`${i + 1} - ${elem}`));
  items.forEach(function (elem, i, array) {
    console.log(`${i + 1} - ${elem}`);
  });
}

logItems(['Mango', 'Poly', 'Ajax']);
logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
