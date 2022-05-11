// Напиши клас User який створює об'єкт із
// властивостями login та email. Оголоси приватні властивості
// #login та #email, доступ до яких зроби через геттер та сеттер login та email.

class Client {
  #login;
  #email;

  constructor(email) {
    this.#email = email;
  }

  get login() {
    return this.#login;
  }

  set login(value) {
    this.#login = value;
  }

  get email() {
    return this.#email;
  }
}

const client = new Client('some@gmail.com');
client.email = 'dwwdwd';
console.log(client.email);

client.login = 'someLogin';
console.log(client.login);
