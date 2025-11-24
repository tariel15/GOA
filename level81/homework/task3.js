
let passwords = ["pass123", "qwerty", "hello2025"];
const [p1, p2, p3] = passwords;
console.log("First password:", p1);
console.log("Second password:", p2);
console.log("Third password:", p3);
passwords.push("newPass999");
const [first, ...others] = passwords;
console.log("First element:", first);
console.log("Other elements:", others);
