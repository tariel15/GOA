// Accounts მასივი
const accounts = [];

class Account {
    constructor(firstName, lastName, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
}

const form = document.getElementById("registerForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const createAccount = () => {
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const account = new Account(firstName, lastName, email, password);
        accounts.push(account);

        console.log("ახალი მომხმარებელი:", account);
        console.log("Accounts მასივი:", accounts);
    };
    createAccount();
});
