
const baseKey = "na";
const endKey = "me";
const dynamicKey = baseKey + endKey;

const x = 1;
const y = 1 + 1;

const account = {
    [dynamicKey]: "User Account",
    ["bal" + "ance"]: 0,
    ["id_" + (x + y)]: 12345,

    deposit(amount) {
        this.balance += amount;
    }
};

account.deposit(50);
account.deposit(100);

const person = {
    firstName: "tariel",
    lastName: "bejanishvili",
    balance: 500
};

const personAccount = Object.assign({}, account, person);
const dataArr = [10, 20, 30];
const [a, b, c] = dataArr;
console.log("account:", account);
console.log("person:", person);
console.log("personAccount:", personAccount);

console.log("a:", a);
console.log("b:", b);
console.log("c:", c);
