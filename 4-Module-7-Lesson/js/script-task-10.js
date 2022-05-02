// Find longest word

const findLongestWord = text => {
  if (!text) {
    return 'Error!';
  }

  const words = text.split(' ');
  let biggets = words[0];

  words.forEach(el => {
    if (el.length > biggets.length) {
      biggets = el;
    }
  });

  return biggets;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
console.log(findLongestWord('Google do a roll')); // 'Google'
console.log(findLongestWord('May the force be with you')); // 'force'
console.log(findLongestWord('')); // error
