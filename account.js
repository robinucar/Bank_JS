class Account {
    constructor() {
      this.balance = 0;
    }
    deposit(deposit_amount){
        return this.balance += deposit_amount
    }

    withdraw(withdraw_amount) {
        return this.balance -= withdraw_amount
    }

  }
  module.exports = Account;
  