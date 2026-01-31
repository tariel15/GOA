console.log("===== TASK 12: Prime numbers using filter & manualFilter =====");

const numArr = [1,2,3,4,5,6,7,8];
function isPrime(num) {
    if (num < 2) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

const primeNumbers = numArr.filter(isPrime);

console.log("filter prime numbers:", primeNumbers);
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

const primeManual = manualFilter(numArr, isPrime);

console.log("manualFilter prime numbers:", primeManual);
