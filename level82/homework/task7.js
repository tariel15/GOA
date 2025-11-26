console.log("===== TASK 7: forEach & manualForEach =====");

const fruits = ['apple', 'banana', 'orange'];
fruits.forEach((value, index, arr) => {

    console.log(value.toUpperCase());
});
function manualForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {

        const value = array[i];
        callback(value, i, array);
    }
}

console.log("\nmanualForEach output:");

manualForEach(fruits, (value, index, arr) => {
    console.log(value.toUpperCase());
});
