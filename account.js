class Account {
    constructor() {
      this.balance = 0;
      this.transactionList = []
      this.date = new Date().toLocaleDateString()
    }
    deposit(deposit_amount){
        this.balance += deposit_amount
    }

    withdraw(withdraw_amount) {
        if(this.balance == 0) {
            throw new Error('Payment error: You do not have enough balance for this transaction')
        } else if(this.balance < withdraw_amount) {
            throw new Error('Payment error: You do not have enough balance for this transaction')
        }
        this.balance -= withdraw_amount
    }



  }
  module.exports = Account;
  