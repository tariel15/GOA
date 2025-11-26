
function sumAll(...numbers) {  
    return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(sumAll(5, 10));
console.log(sumAll(1, 2, 3));
console.log(sumAll(10, 20, 30, 40));
console.log(sumAll(7));
console.log(sumAll());
