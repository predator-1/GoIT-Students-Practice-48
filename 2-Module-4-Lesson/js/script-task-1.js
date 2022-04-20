// Напиши функцію calcBMI(weight, height) яка розраховує
// та повертає індекс маси тіла людини.
// Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини за метри.

// Вага та висота будуть спеціально передані як рядки.
// Нецілі числа можуть бути задані у вигляді 24.7 або 24,7,
//тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

function calcBMI(weight, height) {
  weight = parseNumber(weight);
  height = parseNumber(height);
  return (weight / height ** 2).toFixed(1);
}

function parseNumber(str) {
  str = str.replace(',', '.');
  return parseFloat(str);
}

const bmi = calcBMI('90.3', '1,75');
console.log(bmi); // 28.8
