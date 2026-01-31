class User {
    static usersCount = 0;

    #firstName;
    #lastName;
    #age;

    constructor(firstName, lastName, age) {
        this.setFirstName(firstName);
        this.setLastName(lastName);
        this.setAge(age);
        User.usersCount++;
    }

    #validateName(name) {
        if (!name || typeof name !== "string" || name.trim().length < 2) {
            throw new Error("სახელი ან გვარი უნდა იყოს მინიმუმ 2 სიმბოლო");
        }
    }

    #validateAge(age) {
        if (!Number.isInteger(age) || age < 0 || age > 120) {
            throw new Error("ასაკი უნდა იყოს 0-დან 120-მდე მთელი რიცხვი");
        }
    }

    // getters
    get firstName() {
        return this.#firstName;
    }

    get lastName() {
        return this.#lastName;
    }

    get age() {
        return this.#age;
    }

    setFirstName(name) {
        this.#validateName(name);
        this.#firstName = name;
    }

    setLastName(name) {
        this.#validateName(name);
        this.#lastName = name;
    }

    setAge(age) {
        this.#validateAge(age);
        this.#age = age;
    }

    printDetails() {
        return `Name: ${this.#firstName} ${this.#lastName}, Age: ${this.#age}`;
    }

    static getUsersCount() {
        return User.usersCount;
    }
}

const registeredUsers = [];

const form = document.getElementById("registrationForm");
const usersList = document.getElementById("usersList");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const age = parseInt(document.getElementById("age").value, 10);

    try {
        const newUser = new User(firstName, lastName, age);
        registeredUsers.push(newUser);
        usersList.innerHTML = "";
        registeredUsers.forEach(user => {
            const p = document.createElement("p");
            p.textContent = user.printDetails();
            usersList.appendChild(p);
        });

        form.reset();
    } catch (error) {
        alert(`შეცდომა: ${error.message}`);
    }
});
