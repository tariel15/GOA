
const users = new Map();

users.set(101, "Ana");
users.set(102, "Giorgi");
users.set(103, "Nino");
users.set(104, "Mariam");
console.log("User IDs:");
for (const id of users.keys()) {
    console.log(id);
}

console.log("User Names:");
for (const name of users.values()) {
    console.log(name);
}

console.log("User ID და Name წყვილები:");
for (const [id, name] of users.entries()) {
    console.log(id, name);
}
