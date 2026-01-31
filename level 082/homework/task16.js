console.log("===== TASK 16: Filter people by age =====");
const people = [
    {name: "John", age: 16},
    {name: "Jane", age: 22},
    {name: "Mike", age: 17},
    {name: "Anna", age: 19},
    {name: "Tom", age: 15}
];
const under18 = people.filter(person => person.age < 18);
const eighteenOrOlder = people.filter(person => person.age >= 18);

console.log("Under 18:", under18);

console.log("18 or older:", eighteenOrOlder);