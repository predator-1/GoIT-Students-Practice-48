// "Pending" "Expires" "Overdue"

const hours = prompt();

if (hours < 17) {
  console.log('Pending');
} else if (hours >= 17 && hours <= 24) {
  console.log('Expires');
} else {
  console.log('Overdue');
}
