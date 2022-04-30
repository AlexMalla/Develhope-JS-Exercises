class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    this.#amount += amount;
  }

  withdraw(amount) {
    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }
}

class BankAccountVip extends BankAccount {
  #amountVip = 0;
  constructor(initialAmount) {
    super(initialAmount);
    this.#amountVip = initialAmount;
  }
  deposit(depositAmount) {
    if (this.#amountVip >= 1000) {
      this.#amountVip += depositAmount + (depositAmount / 100) * 3;
      return this.#amountVip;
    }
  }
  withdraw(withdrawAmount) {
    this.#amountVip -= withdrawAmount;
    return this.#amountVip;
  }
  view() {
    console.log(this.#amountVip);
  }
}

const bankAccountVip = new BankAccountVip(1000);
bankAccountVip.deposit(500);
bankAccountVip.deposit(1200);
bankAccountVip.withdraw(800);
bankAccountVip.deposit(3500);
bankAccountVip.view();
