
function calcSum(first, ...numbers) {
    const sum = numbers.reduce((acc, n) => acc + n, 0);

    console.log("First number:", first);
    console.log("Sum of the rest:", sum);
}

calcSum(5, 10, 20, 15); 
// First number: 5
// Sum of the rest: 45
