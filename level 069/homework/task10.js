function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }

    return true;
}

function checkPrime() {
    const input = document.getElementById('numberInput').value;
    const num = Number(input);
    const resultElem = document.getElementById('result');

    if (!input) {
        resultElem.textContent = 'გთხოვ, ჩაწერე რიცხვი.';
        return;
    }

    if (isPrime(num)) {
        resultElem.textContent = `${num} არის მარტივი რიცხვი.`;
    } else {
        resultElem.textContent = `${num} არ არის მარტივი რიცხვი.`;
    }
}
