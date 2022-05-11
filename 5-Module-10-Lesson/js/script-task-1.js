// Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:

// email - пошта, рядок
// age - вік, число
// numberOfPosts - кількість постів, число
// topics - масив тем, на яких спеціалізується блогер
// Клас очікує один параметр – об'єкт налаштувань з однойменними властивостями.

// Додай метод getInfo(), який повертає рядок: User ${пошта} is ${вік}
// years old and has ${кількість постів} posts.

// Додай метод updatePostCount(value), який у параметрі
// value приймає кількість постів, які потрібно додати користувачеві.

class Blogger {
  constructor({ name, age, numberOfPosts, topics }) {
    this.name = name;
    this.age = age;
    this.numberOfPosts = numberOfPosts;
    this.topics = topics;
  }

  updatePostCount(count) {
    this.numberOfPosts += count;
  }

  getInfoArrow = () => {
    return `User ${this.name} is ${this.age} years old and has ${this.numberOfPosts}`;
  };

  getInfo() {
    return `User ${this.name} is ${this.age} years old and has ${this.numberOfPosts}`;
  }
}

const mango = new Blogger({
  name: 'mango@mail.com',
  age: 24,
  numberOfPosts: 20,
  topics: ['tech', 'cooking'],
});
console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
mango.updatePostCount(5);
console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts

// const poly = new Blogger({
//   name: 'poly@mail.com',
//   age: 19,
//   numberOfPosts: 17,
//   topics: ['sports', 'gaming', 'health'],
// });
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(4);
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts

const obj = {
  name: 'poly@mail.com',
  age: 19,
  numberOfPosts: 17,
  topics: ['sports', 'gaming', 'health'],
  getInfo: mango.getInfo,
  getInfoArrow: mango.getInfoArrow,
};

console.log('getInfo', obj.getInfo());
console.log('getInfoArrow', obj.getInfoArrow());
