const user = {
    name: "tarieli",
    level: 79,
    score: 2000
};

// for...in — გამოიყენება ობიექტის key-ებზე გადასასვლელად
// თითო iteration-ზე გვაძლევს ერთი key-ს სახელს
const out = document.getElementById("output");
out.textContent = "";
for (let key in user) {
    out.textContent += `${key}: ${user[key]}\n`;
}
