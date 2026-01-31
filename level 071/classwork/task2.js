function NumberIn(number) {
    this.number = number;
    this.even = number % 2 === 0;
}

let numbers = [];

for (let i = 1; i <= 10; i++) {
    let obj = new NumberIn(i);
    numbers.push(obj);
}

console.log("Numbers array:", numbers);
