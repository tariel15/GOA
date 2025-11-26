const manualMap = (arr, callback) => {
    const result = [];
    let i = 0;
    for (const item of arr) {
        result.push(callback(item, i, arr));
        i++;
    }
    return result;
};
const manualFilter = (arr, callback) => {
    const result = [];
    let i = 0;
    for (const item of arr) {
        if (callback(item, i, arr)) result.push(item);
        i++;
    }
    return result;
};
const numbers = [1, 2, 3, 4, 5];
console.log(manualMap(numbers, n => n * 2));
console.log(manualFilter(numbers, n => n % 2 === 1));