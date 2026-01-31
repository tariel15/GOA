function countDownFrom20() {
    let output = "";
    for (let i = 20; i >= 0; i--) {
        output += i + "\n";
    }
    document.getElementById("countdownResult").innerText = output;
}
