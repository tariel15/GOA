const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,10,];
const squared = numbers.map(num => num ** 2);
console.log("Squared:", squared);
const plusFive = numbers.map(num => num + 5);
console.log("Plus Five:", plusFive);
const evens = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evens);
const uniqueOnce = numbers.filter(num => 
    numbers.indexOf(num) === numbers.lastIndexOf(num)
);
console.log("Only Once:", uniqueOnce);