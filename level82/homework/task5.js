
const myArr = ["AB", "CD", "ED"];

const mapResult = myArr.map((value, index, arr) => {
    return value + "#" + index;
});

console.log("map result:", mapResult); 

function manualMap(array, callback) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        const value = array[i];

        const transformed = callback(value, i, array);

        result.push(transformed);
    }

    return result;
}

const manualResult = manualMap(myArr, (value, index, arr) => {
    return value + "#" + index;
});

console.log("manualMap result:", manualResult);

