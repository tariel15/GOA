class User {
    constructor(password) {
        this._password = password;
    }

    get password() {
        return this._password;
    }
}

const user = new User("mySecret123");

console.log("User password:", user.password);
