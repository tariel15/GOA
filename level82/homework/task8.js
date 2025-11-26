console.log("===== TASK 8: reduce & manualReduce =====");

const numbersArr = [12, 15, 17, 12, 15, 36, 23, 6, 2, 6];

const sum = numbersArr.reduce((acc, value) => {
    return acc + value;
}, 0);  
console.log("reduce sum:", sum);

const product = numbersArr.reduce((acc, value) => {
    return acc * value;
}, 1);
console.log("reduce product:", product);
function manualReduce(array, callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < array.length; i++) {

        const value = array[i];
        accumulator = callback(accumulator, value, i, array);
    }

    return accumulator;
}
const manualSum = manualReduce(numbersArr, (acc, value) => {
    return acc + value;
}, 0);

console.log("manualReduce sum:", manualSum);
const manualProduct = manualReduce(numbersArr, (acc, value) => {
    return acc * value;
}, 1);

console.log("manualReduce product:", manualProduct);



console.log("\n===== EXPLANATION =====");
