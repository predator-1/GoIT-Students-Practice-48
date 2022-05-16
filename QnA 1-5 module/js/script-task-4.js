// Є функція changeSalary
// та користувачі
// напишіть функцію, яка приймає користувача та число
// і змінює йому зарплату на число за допомогою ф-ії changeSalary

function changeSalary(value) {
  this.salary += value;
}

const user1 = {
  name: 'Sam',
  salary: 1000,
};

const user2 = {
  name: 'Dmytro',
  salary: 2000,
};

function changeUserSalary(user, value) {
  //changeSalary.call(user, value);
  changeSalary.apply(user, [value]);
}

changeUserSalary(user1, 100);
console.log(user1);
changeUserSalary(user2, 200);
console.log(user2);
