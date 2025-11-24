
function myFunction(firstParam, ...restParams) {
    console.log("First parameter:", firstParam);
    console.log("Rest parameters:", restParams);
}
myFunction(10, 20, 30, 40, 50);
const middleNumbers = [4, 5, 6];

const allNumbers = [
    1, 2, 3,
    ...middleNumbers,  // spread operator – გულისხმობს ელემენტების დაშლას
    7, 8, 9
];

console.log("Middle list:", middleNumbers);
console.log("All numbers with spread:", allNumbers);
