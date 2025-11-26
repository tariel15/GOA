console.log("===== TASK 13: Map objects to names =====");
const arr = [
    {id:123, name:"luka"},
    {id:456, name:"ana"},
    {id:789, name:"giorgi"}
];
const namesMap = arr.map(obj => obj.name);
console.log("map names:", namesMap);
function manualMap(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        const value = array[i];
        result.push(callback(value, i, array));
    }
    return result;
}

const namesManual = manualMap(arr, obj => obj.name);
console.log("manualMap names:", namesManual);