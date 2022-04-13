const max = 100;
let min = 16;

// for (let i = min; i <= max; i += 1) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

while (min % 5 !== 0) {
  min += 1;
}

for (let i = min; i <= max; i += 5) {
  console.log(i);
}
