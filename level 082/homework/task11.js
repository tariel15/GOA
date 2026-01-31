console.log("===== TASK 11: Names length & sum =====");

const names = ['John','Jane','Mike','Anna'];
const lengthsMap = names.map(name => name.length);
console.log("map lengths:", lengthsMap);
function manualMap(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        const value = array[i];
        result.push(callback(value, i, array));
    }
    return result;
}

const lengthsManual = manualMap(names, name => name.length);
console.log("manualMap lengths:", lengthsManual);
const totalLengthReduce = lengthsMap.reduce((acc, cur) => {
    return acc + cur;
}, 0);

console.log("reduce total length:", totalLengthReduce);
function manualReduce(array, callback, initialValue) {
    let acc = initialValue;
    for (let i = 0; i < array.length; i++) {
        acc = callback(acc, array[i], i, array);
    }
    return acc;
}

const totalLengthManual = manualReduce(lengthsManual, (acc, cur) => acc + cur, 0);
console.log("manualReduce total length:", totalLengthManual);