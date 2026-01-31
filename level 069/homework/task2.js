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
}

function calculateAverage(numbers) {
    if (numbers.length === 0) return 0;
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum / numbers.length;
}
