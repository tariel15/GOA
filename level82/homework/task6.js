console.log("===== TASK 5: map & manualMap =====");
const myArr = ["AB", "CD", "ED"];

const mapResult = myArr.map((value, index, arr) => {
    return value + "#" + index;
});

console.log("map result:", mapResult);
function manualMap(array, callback) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        const value = array[i];
        const newValue = callback(value, i, array);
        result.push(newValue);
    }

    return result;
}

const manualMapResult = manualMap(myArr, (value, index, arr) => {
    return value + "#" + index;
});

console.log("manualMap result:", manualMapResult);
console.log("\n===== TASK 6: filter & manualFilter =====");
const numbersArr = [12, 15, 17, 12, 15, 36, 23, 6, 2, 6];
const evenNumbers = numbersArr.filter((value, index, arr) => {
    return value % 2 === 0;
});

console.log("filter result:", evenNumbers);
function manualFilter(array, callback) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        const value = array[i];
        if (callback(value, i, array)) {
            result.push(value);
        }
    }

    return result;
}

const manualFilterResult = manualFilter(numbersArr, (value, index, arr) => {
    return value % 2 === 0;
});

console.log("manualFilter result:", manualFilterResult);
console.log("\n===== EXPLANATION =====");