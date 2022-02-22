class Account {
  constructor() {
    this.balance = 0;
    this.transactionList = [];
    this.date = new Date().toLocaleDateString();
  }
  deposit(deposit_amount) {
    this.balance += deposit_amount;
    this.transactionList.push({
      date: this.date,
      deposit: deposit_amount,
      withdraw: "",
      balance: this.balance,
    });
  }

  withdraw(withdraw_amount) {
    if (this.balance == 0) {
      throw new Error(
        "Payment error: You do not have enough balance for this transaction"
      );
    } else if (this.balance < withdraw_amount) {
      throw new Error(
        "Payment error: You do not have enough balance for this transaction"
      );
    }
    this.balance -= withdraw_amount;
    this.transactionList.push({
      date: this.date,
      deposit: "",
      withdraw: withdraw_amount,
      balance: this.balance,
    });
  }


}
module.exports = Account;
