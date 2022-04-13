// Showing time (if...else)
const hours = 14;
const minutes = 40;

const timeString = `${hours}hr ${minutes > 0 ? `${minutes}m` : ''}`;

// if (minutes > 0) {
//   timeString = `${hours}hr ${minutes}m`;
// } else {
//   timeString = `${hours}hr`;
// }

console.log(timeString);
