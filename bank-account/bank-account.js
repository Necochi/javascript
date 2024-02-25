//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import {} from 'http';

export class BankAccount {
  #balance;

  open() {
    if (this.#balance !== 0) {
      this.#balance = 0;
    } else {
      throw new ValueError();
    }
  }

  close() {
    if (this.#balance >= 0) {
      this.#balance = null;
    } else {
      throw new ValueError();
    }
  }

  deposit(money) {
    if (money > 0 && this.#balance !== null) {
      this.#balance += money;
    } else {
      throw new ValueError();
    }
  }

  withdraw(money) {
    if (money > 0 && this.#balance >= money) {
      this.#balance -= money;
    } else {
      throw new ValueError();
    }
  }

  get balance() {
    if (this.#balance === null) {
      throw new ValueError();
    } else {
      return this.#balance;
    }
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
