const Account = require("../account");
describe("Account Class", () => {
  const account = new Account();
  const account1 = new Account();
  it("Should create an account with 0 balance", () => {
    expect(account.balance).toEqual(0);
  });

  it("balance should  increase by deposit amount", () => {
    account.deposit(100);
    expect(account.balance).toEqual(100);
  });

  it("balance should  decrease by withdraw amount", () => {
    account.withdraw(50);
    expect(account.balance).toEqual(50);
  });
  it("should throw an error when withdrawing if balance is 0", () => {
    account.balance = 0;
    expect(() => account.withdraw(100)).toThrow();
  });
  it("should throw an error when withdrawing if balance is less than withdraw amount", () => {
    account.balance = 75;
    expect(() => account.withdraw(100)).toThrow();
  });

  it("should start with empty transaction list", () => {
    expect(account1.transactionList.length).toEqual(0);
  });

  it("should add transaction to the transactionList", () => {
    account1.balance = 0;
    account1.deposit(100);
    expect(account1.transactionList).toEqual([
      {
        date: "22/02/2022",
        deposit: 100,
        withdraw: "",
        balance: 100,
      },
    ]);
  });

  it("should add multiple transaction to the transactionList", () => {
    account1.withdraw(50);
    account1.deposit(25);
    account1.withdraw(10);
    expect(account1.transactionList.length).toEqual(4);
  });

  it("should print the transaction", () => {
    const account2 = new Account();
    account2.deposit(100);
		
    expect(account2.printTransaction()).toEqual(
			"date || credit || debit || balance\n" + "22/02/2022 || 100 ||  || 100\n"
			);
  });
});
