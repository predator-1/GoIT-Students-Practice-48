// Доповни функцію createContact(partialContact) так,
// щоб вона повертала новий об'єкт контакту з доданими
// властивостями id і createdAt, а також list зі значенням
// "default", якщо у partialContact немає такої властивості.

function createContact(partialContact) {
  return {
    list: 'default',
    ...partialContact,
    id: generateId(),
    createdAt: Date.now(),
  };
}

console.log(
  createContact({
    name: 'Mango',
    email: 'mango@mail.com',
    list: 'friends',
  }),
);
console.log(
  createContact({
    name: 'Poly',
    email: 'poly@hotmail.com',
  }),
);

function generateId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}
