
class Account {
    constructor(firstName, lastName, email, password, city) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.city = city;
    }

    printDetails() {
        return `Name: ${this.firstName} ${this.lastName}, Email: ${this.email}, City: ${this.city}`;
    }
}

const accounts = [];


const form = document.getElementById("accountForm");
const accountsList = document.getElementById("accountsList");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const city = document.getElementById("city").value;
    const newAccount = new Account(firstName, lastName, email, password, city);

    accounts.push(newAccount);

    accountsList.innerHTML = "";
    accounts.forEach(acc => {
        const p = document.createElement("p");
        p.textContent = acc.printDetails();
        accountsList.appendChild(p);
    });

    form.reset();
});
