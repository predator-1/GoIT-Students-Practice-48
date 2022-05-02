// refactoring with 'forEach'

// const ttt = undefined;
// if (ttt && ttt.length) {
//   ttt.forEach(el => console.log(el));
// }

function calсulateAverage(...args) {
  let total = 0;
  // for (let i = 0; i < args.length; i++) {
  //   total += args[i];
  // }
  args.forEach(el => (total += el));
  return total / args.length;
}

console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
console.log(calсulateAverage(14, 8, 2)); // 8
console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2
