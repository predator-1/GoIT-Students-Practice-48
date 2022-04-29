const stonesObject = {
  emerald: { price: 1300, quantity: 4 },
  diamond: { price: 2700, quantity: 3 },
  sapphire: { price: 400, quantity: 7 },
  crushedStone: { price: 200, quantity: 2 },
};

console.log(calcTotalPrice(stonesObject, 'emerald')); // 5200

function calcTotalPrice(stones, stoneName) {
  // if (stones[stoneName]) {
  if (stoneName in stones) {
    return stones[stoneName].price * stones[stoneName].quantity;
  }
  return 'no such stones';
}
