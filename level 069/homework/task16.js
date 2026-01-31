function printCharacters() {
    const input = document.getElementById('textInput').value;
    if (!input) {
        console.log("სტრიქონი ცარიელია.");
        return;
    }
    for (let i = 0; i < input.length; i++) {
        console.log(input[i]);
    }
}
