//Напиши функцію formatTime(minutes), яка переведе значення minutes
//(кількість хвилин) у рядок у форматі годин і хвилин HH:MM.

function formatTime(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  const hoursTwoLetters = String(hours).padStart(2, '0');
  const minutesTwoLetters = String(minutes).padStart(2, '0');

  return `${hoursTwoLetters}:${minutesTwoLetters}`;
}

console.log(formatTime(70)); // "01:10"
console.log(formatTime(450)); // "07:30"
console.log(formatTime(1441)); // "24:01"
