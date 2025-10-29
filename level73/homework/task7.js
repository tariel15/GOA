
const generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * 1000);
    const paragraph = document.createElement("p");
    paragraph.textContent = "შემთხვევითი რიცხვი: " + randomNumber;
    document.body.appendChild(paragraph);
});
