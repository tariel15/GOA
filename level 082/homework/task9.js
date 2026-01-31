console.log("===== TASK 9: manualMap vs map =====");

const numbersArr = [12, 15, 17, 12, 15, 36, 23, 6, 2, 6];

function manualMap(array, callback) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        const value = array[i];
        const newValue = callback(value, i, array);

        result.push(newValue);
    }

    return result;
}

const doubledManual = manualMap(numbersArr, (value, index, arr) => {
    return value * 2;
});

console.log("manualMap doubled:", doubledManual);
const doubledMap = numbersArr.map((value, index, arr) => {
    return value * 2;
});

console.log("map doubled:", doubledMap);

const areEqual = JSON.stringify(doubledManual) === JSON.stringify(doubledMap);
console.log("Are manualMap and map results equal?", areEqual);
