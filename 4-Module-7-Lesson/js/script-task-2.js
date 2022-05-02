// Додайте об'єкту account методи withdraw(amount, onSuccess, onError)
// і deposit(amount, onSuccess, onError), де перший параметр це сума операції,
// а другий і третій – колбеки.

// Метод withdraw викликає onError якщо amount більше TRANSACTION_LIMIT або this.balance,
// і напроцедуру в іншому випадку.

// Метод deposit викликає onError якщо amount більше TRANSACTION_LIMIT або
// менше або дорівнює нулю, і напроцедурі інакше.

const TRANSACTION_LIMIT = 1000;

const account = {
  username: 'Oleksii',
  balance: 400,
  withdraw(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT) {
      onError(`Amount should be exced ${TRANSACTION_LIMIT} credits`);
    } else if (amount > this.balance) {
      onError(
        `Amount can't be exceed account balance of ${this.balance} credits`,
      );
    } else {
      this.balance -= amount;
      onSuccess(`Account balance ${this.balance}`);
    }
  },
  deposit(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT) {
      onError(`Amount should be exced ${TRANSACTION_LIMIT} credits`);
    } else if (amount <= 0) {
      onError(`Amount must be more than 0. Now it is ${amount}`);
    } else {
      this.balance += amount;
      onSuccess(`Account balance ${this.balance}`);
    }
  },
};

function handleSuccess(message) {
  console.log(`Success ${message}`);
}

function handleError(message) {
  console.log(`Error ${message}`);
}

account.withdraw(2000, handleSuccess, handleError);
account.withdraw(600, handleSuccess, handleError);
account.withdraw(300, handleSuccess, handleError);
account.deposit(1700, handleSuccess, handleError);
account.deposit(0, handleSuccess, handleError);
account.deposit(-600, handleSuccess, handleError);
account.deposit(600, handleSuccess, handleError);
