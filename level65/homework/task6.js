//  ფუნქცია კუბს გამოთვლის და გამოიტანს
function cubeNumber() {
    const input = document.getElementById("numInput");
    const output = document.getElementById("numOut");

    const num = Number(input.value);

    if (isNaN(num)) {
        output.textContent = "Please enter a valid number.";
        return;
    }

    const cube = Math.pow(num, 3); // ან: num * num * num

    output.textContent = `Cube: ${cube}`;
}

//  ღილაკზე დაჭერისას გამოვიძახოთ cubeNumber()
document.getElementById("cubeBtn").addEventListener("click", cubeNumber);

/*

- input.value იღებს შეყვანილ რიცხვს.
- Number() გარდაქმნის სტრიქონს რიცხვად.
- Math.pow(num, 3) ან num ** 3 → ითვლის კუბს.
- შედეგი გამოდის <p> ელემენტში.
*/
