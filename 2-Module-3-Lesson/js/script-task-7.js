// Напиши скрипт сортування масиву рядків в алфавітному
// порядку за першою літерою елемента.

const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];

for (let i = 1; i < langs.length; i++) {
  for (let j = 0; j < i; j++) {
    console.log(langs[i], langs[j]);
    if (langs[i][0] < langs[j][0]) {
      let x = langs[i];
      langs[i] = langs[j];
      langs[j] = x;
    }
  }
}

console.log(langs);
