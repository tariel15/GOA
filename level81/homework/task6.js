class BankAccount {
    static accountsCount = 0;

    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;

        BankAccount.accountsCount++;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`${this.owner} deposited ${amount}. New balance: ${this.balance}`);
    }

    static getAccountsCount() {
        return BankAccount.accountsCount;
    }
}
const acc1 = new BankAccount("Alice", 500);
const acc2 = new BankAccount("Bob", 1200);

console.log("Accounts count:", BankAccount.getAccountsCount());
