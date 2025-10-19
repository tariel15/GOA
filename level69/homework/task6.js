function countWithWhile() {
    let i = 1;
    let output = "";
    while (i <= 50) {
        console.log(i);
        output += i + "\n";
        i++;
    }
    document.getElementById("whileResult").innerText = output;
}
