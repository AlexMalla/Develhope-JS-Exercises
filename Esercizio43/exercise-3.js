class error {
  constructor(alert) {
    this.alert = alert;
    this.name = "Error";
  }
}

class NegativeAmountError extends error {
  constructor(alert) {
    super(alert);
    this.name = "Error: you cannot deposit negatives amounts.";
  }
}

class WithdrawNotPermittedError extends error {
  constructor(alert) {
    super(alert);
    this.name = "Error: you cannot witdraw negatives amounts.";
  }
}

class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    if (amount < 0) {
      throw new Error("The amount provided cannot be negative"); // Use custom Error class
    }

    this.#amount += amount;
  }

  withdraw(amount) {
    if (amount < 0) {
      throw new Error("The amount provided cannot be negative"); // Use custom Error class
    }

    if (this.#amount < amount) {
      throw new Error("You cannot withdraw more than account balance"); // Use custom Error class
    }

    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }
}

try {
  const bankAccount = new BankAccount(1000);
  bankAccount.deposit(500);
  bankAccount.deposit(200);
  bankAccount.withdraw(10000);
  bankAccount.view();
} catch (e) {
  console.log(`${e.name}: ${e.message}`);
}
