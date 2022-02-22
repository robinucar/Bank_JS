const Account = require("../account");
describe("Account Class", () => {
  const account = new Account();
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

  it('should start with empty transaction list', () => {
      account1 = new Account()
      expect(account1.transactionList.length).toEqual(0)
  })
});
