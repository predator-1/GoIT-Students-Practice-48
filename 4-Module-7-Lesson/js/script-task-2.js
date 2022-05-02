// Додайте об'єкту account методи withdraw(amount, onSuccess, onError)
// і deposit(amount, onSuccess, onError), де перший параметр це сума операції,
// а другий і третій – колбеки.

// Метод withdraw викликає onError якщо amount більше TRANSACTION_LIMIT або this.balance,
// і напроцедуру в іншому випадку.

// Метод deposit викликає onError якщо amount більше TRANSACTION_LIMIT або
// менше або дорівнює нулю, і напроцедурі інакше.

const TRANSACTION_LIMIT = 1000;

const account = {};

account.withdraw(2000, handleSuccess, handleError);
account.withdraw(600, handleSuccess, handleError);
account.withdraw(300, handleSuccess, handleError);
account.deposit(1700, handleSuccess, handleError);
account.deposit(0, handleSuccess, handleError);
account.deposit(-600, handleSuccess, handleError);
account.deposit(600, handleSuccess, handleError);
