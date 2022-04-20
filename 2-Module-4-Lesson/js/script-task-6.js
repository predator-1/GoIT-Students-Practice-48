// Напиши функцію findLargestNumber(numbers), яка шукає найбільше число в масиві.

function findLargestNumber(numbers) {
  if (numbers && !numbers.length) {
    console.log('empty');
    return;
  }

  let max = numbers[0];

  for (const num of numbers) {
    if (num > max) {
      max = num;
    }
  }

  return max;
}

console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83
console.log(findLargestNumber([]));
