class Account {
    static count = 0;

    firstName;
    lastName;
    #password;
    constructor(firstName, lastName, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.#password = password;
        Account.objectCount();
    }
    get password() {
        return this.#password;
    }

    set password(newPass) {
        if (newPass.length < 4) {
            console.log("Password must be at least 4 characters.");
            return;
        }
        this.#password = newPass;
    }
    showInfo() {
        console.log(`User: ${this.firstName} ${this.lastName}`);
    }
    #encryptPassword() {
        return "***" + this.#password + "***";
    }
    showEncryptedPassword() {
        console.log("Encrypted password:", this.#encryptPassword());
    }
    static objectCount() {
        Account.count++;
    }
}

const acc1 = new Account("Gio", "kirnalioze", "pass123");
const acc2 = new Account("gocha", "yanchelishvili", "hello22");

acc1.showInfo();
acc2.showInfo();

console.log("Acc1 password:", acc1.password);
acc1.password = "newpass";
console.log("Acc1 new password:", acc1.password);
acc1.password = "12";
acc1.showEncryptedPassword();
console.log("Total objects created:", Account.count);