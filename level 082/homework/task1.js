// MAP – გარდაქმნა
const nums = [1, 2, 3, 4];
const doubled = nums.map(n => n * 2);
console.log("map:", doubled); 

// FILTER – გაფილტვრა
const evens = nums.filter(n => n % 2 === 0);
console.log("filter:", evens); 

// FOREACH – მოქმედება თითოეულ ელემენტზე
console.log("forEach:");
nums.forEach(n => console.log("item:", n));


// REDUCE – აკუმულაცია ერთ მნიშვნელობამდე
const sum = nums.reduce((acc, n) => acc + n, 0);
console.log("reduce:", sum);  
