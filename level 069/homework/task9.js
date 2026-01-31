function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return number + " არის ლუწი რიცხვი.";
    } else {
        return number + " არის კენტი რიცხვი.";
    }
}
function showResult() {
    const input = parseInt(document.getElementById("numberInput").value);
    if (isNaN(input)) {
        document.getElementById("result").innerText = "გთხოვთ შეიყვანეთ სწორი რიცხვი.";
        return;
    }
    const message = checkEvenOrOdd(input);
    document.getElementById("result").innerText = message;
}
