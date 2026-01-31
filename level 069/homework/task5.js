function printEvenNumbers() {
    let output = "";
    for (let i = 0; i <= 10; i += 2) {
        output += i + "\n";
    }
    document.getElementById("evenWithoutIf").innerText = output;
}
