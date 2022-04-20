// Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника
// зі сторонами,
// значення яких будуть передані параметр dimensions у вигляді рядка.
// Значення гарантовано розділені пробілом.

function getRectArea(dimensions) {
  const parsedDimensions = dimensions.split(' ');
  return parsedDimensions[0] * parsedDimensions[1];
}

console.log(getRectArea('8 11'));
console.log(getRectArea('11 12'));
console.log(getRectArea('11 11'));
