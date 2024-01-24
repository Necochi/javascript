//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import {} from "http";

export class BankAccount {
  constructor() {
  }

  open() {
    if (this._balance !== 0) {
    this._balance = 0;
    } else {
      throw new ValueError;
    }
  }

  close() {
    if (this._balance >= 0 ) {
    this._balance = null;
    } else {
      throw new ValueError;
    }
  }

  deposit(money) {
    if (money > 0 && this._balance !== null) {
    this._balance += money;
    } else {
      throw new ValueError;
    }
  }

  withdraw(money) {
    if (money > 0 && this._balance >= money ) {
      this._balance -= money;
    } else {
      throw new ValueError;
    }
  }

  get balance() {
    if (this._balance === null) {
      throw new ValueError
    } else {
      return this._balance;
    }
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
