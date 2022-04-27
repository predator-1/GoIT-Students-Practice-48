// Ми маємо об'єкт, у якому зберігаються зарплати нашої команди.
// Напишіть код для підсумовування всіх зарплат і збережіть результат
// у змінній sum. Повинне вийти 390.
// Якщо об'єкт salaries порожній, результат має бути 0.

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;

for (const value of Object.values(salaries)) {
  sum += value;
}

console.log(sum);

// const entries = Object.entries(salaries);
// console.log(entries[1][1]);
