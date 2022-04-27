// Напиши скрипт, який для об'єкта user послідовно:
// - додає поле mood зі значенням 'happy'
// - замінює значення hobby на 'skydiving'
// - замінює значення premium на false
// - виводить вміст об'єкта user у форматі ключ: значення використовуючи Object.keys() і for...of

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';

user.hobby = 'skydiving';

user.premium = !user.premium;

// for (const name in user) {
//   console.log(`${name}: ${user[name]}`);
// }

for (const name of Object.keys(user)) {
  user[name] = user[name] + '----';
  console.log(`${name}: ${user[name]}`);
}

console.log(user);
