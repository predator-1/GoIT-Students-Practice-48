// Напишіть клас Toggle, який приймає об'єкт налаштувань
// {isOpen: boolean} і оголошує одну властивість on -
// стан вкл/викл (true/false). За  замовчанням
// значення властивості on має бути false.

class Toggle {
  //   constructor(settings) {
  //     // if (settings) {
  //     //   const { isOpen } = settings;
  //     //   this.on = isOpen;
  //     // }
  //     const { isOpen = false } = settings ?? {};
  //     this.on = isOpen;
  //   }

  constructor({ isOpen = false } = {}) {
    this.on = isOpen;
  }

  toggle() {
    this.on = !this.on;
  }
}

const toggle1 = new Toggle();
toggle1.toggle();
console.log(toggle1.on); // true

const toggle2 = new Toggle({ isOpen: true });
toggle2.toggle();
console.log(toggle2.on); // false
