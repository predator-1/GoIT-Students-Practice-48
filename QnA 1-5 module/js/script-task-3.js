// Напишіть функцію збереження знижки.
// Функція повертає іншу функцію,
// яка приймає суму покупки
// і повертає фінальну суму зі збереженою знижкою.

function applyDiscount(discount) {
  return function (price) {
    //return price - price * discount / 100;
    return (price * (100 - discount)) / 100;
  };
}

const withBaseDiscount = applyDiscount(10);

console.log(withBaseDiscount(100));
console.log(withBaseDiscount(300));

const withSilverDiscount = applyDiscount(20);

console.log(withSilverDiscount(100));
console.log(withSilverDiscount(300));
