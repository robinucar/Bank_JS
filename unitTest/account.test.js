const Account = require("../account");
describe("Account Class", () => {
  const account = new Account();
  it("Should create an account with 0 balance", () => {
    expect(account.balance).toEqual(0);
  });

  it("balance should  increase by deposit amount", () => {
      account.deposit(100)
      expect(account.balance).toEqual(100)
  })
});
