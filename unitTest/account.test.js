describe('Account Class', () => {
    it('Should create an account with 0 balance', () => {
        const account = new Account()
        expect(account.balance).toEqual(0)
    })
})