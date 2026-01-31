function countdown() {
    const output = document.getElementById('output');
    output.innerHTML = '';
    let i = 10;
    while (i >= 0) {
        output.innerHTML += i + '<br>';
        i--;
    }
    output.innerHTML += 'Countdown complete!';
}
