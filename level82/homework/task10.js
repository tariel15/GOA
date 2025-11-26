console.log("===== TASK 10: manualReduce vs reduce (maximum) =====");

const numbersArr = [12, 15, 17, 12, 15, 36, 23, 6, 2, 6];
function manualReduce(array, callback, initialValue) {
    let accumulator = initialValue;

    for (let i = 0; i < array.length; i++) {
        const value = array[i];
        accumulator = callback(accumulator, value, i, array);
    }

    return accumulator;
}
const maxManual = manualReduce(numbersArr, (acc, cur) => {
    return cur > acc ? cur : acc;
}, numbersArr[0]);

console.log("manualReduce max:", maxManual);
const maxReduce = numbersArr.reduce((acc, cur) => {
    return cur > acc ? cur : acc;
}, numbersArr[0]);

console.log("reduce max:", maxReduce);

console.log("Do manualReduce and reduce results match?", maxManual === maxReduce);