/**
 * Напиши функцію getAllPropValues(propName)
 * яка поверне всі значення заданого
 * властивості
 * Наприклад getAllPropValues('name') повертає ['Asus', 'Huawei', 'HP', 'Dell']
 * getAllPropValues('category') повертає []
 */

const products = [
  { name: 'Asus', price: 1300, quantity: 4 },
  { name: 'Huawei', price: 2700, quantity: 3 },
  { name: 'HP', price: 400, quantity: 7 },
  { name: 'Dell', price: 1200, quantity: 9 },
];

// function getAllPropValues(propName) {
//   return products.map(p => p[propName]);
// }

function getAllPropValues(propName) {
  return products.reduce((acc, product) => {
    if (product.hasOwnProperty(propName)) {
      acc.push(product[propName]);
    }
    return acc;
  }, []);
}

console.log(getAllPropValues('name'));
console.log(getAllPropValues('category'));
