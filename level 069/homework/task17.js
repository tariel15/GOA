function checkPassword() {
    const correctPassword = "1234";
    let userPassword = document.getElementById('passwordInput').value;
    const resultElem = document.getElementById('result');
    let attempts = 1;
    while (userPassword !== correctPassword) {
        userPassword = prompt("პაროლი არასწორია. სცადე თავიდან:");
        attempts++;
        if (attempts > 5) {
            resultElem.textContent = "ძალიან ბევრი მცდელობა!";
            return;
        }
    }
    resultElem.textContent = "პაროლი სწორია!";
}
