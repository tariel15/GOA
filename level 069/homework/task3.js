function generateArray() {
    const start = parseInt(document.getElementById("start").value);
    const end = parseInt(document.getElementById("end").value);
    if (isNaN(start) || isNaN(end)) {
        document.getElementById("result").innerText = "გთხოვთ ჩაწერეთ სწორი რიცხვები.";
        return;
    }
    const array = [];
    for (let i = start; i <= end; i++) {
        array.push(i);
    }
    const average = calculateAverage(array);
    document.getElementById("result").innerText =
        "მასივი: " + array.join(", ") + "\nსაშუალო: " + average;
    document.getElementById("evenResult").innerText = "";
}

function calculateAverage(numbers) {
    if (numbers.length === 0) return 0;
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum / numbers.length;
}

function even_sum(border) {
    let sum = 0;
    for (let i = 0; i <= border; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}

function calculateEvenSum() {
    const end = parseInt(document.getElementById("end").value);
    if (isNaN(end)) {
        document.getElementById("evenResult").innerText = "გთხოვთ შეიყვანეთ სწორი end მნიშვნელობა.";
        return;
    }
    const evenSum = even_sum(end);
    document.getElementById("evenResult").innerText =
        "ლუწი რიცხვების ჯამი (0-დან " + end + "-მდე): " + evenSum;
}
