//Напиши функцію printContactsInfo(names, phones) яка
//Виводить в консоль ім'я та телефонний номер користувача.
//У параметри names і phones будуть передані рядки імен
//телефонних номерів, розділені комами. Порядковий номер
//імен та телефонів у рядках вказують на відповідність.
//Кількість імен та телефонів гарантовано однакова.

function printContactsInfo(names, phones) {
  const namesArray = names.split(',');
  const phonesArray = phones.split(',');

  for (let i = 0; i < namesArray.length; i += 1) {
    console.log(`${namesArray[i]} - ${phonesArray[i]}`);
  }
}

printContactsInfo(
  'Jacob,William,Solomon,Artemis',
  '89001234567,89001112233,890055566377,890055566300',
);
