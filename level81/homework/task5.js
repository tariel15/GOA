
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedSpread = [...arr1, ...arr2];

console.log("Combined with spread:", combinedSpread);

const combinedNested = [arr1, arr2];

console.log("Combined by nesting:", combinedNested);

