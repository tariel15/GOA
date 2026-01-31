//  ფუნქცია სიტყვას აბრუნებს უკუღმა და აჩვენებს
function reverseWord() {
    const input = document.getElementById("wordInput");
    const output = document.getElementById("wordOut");

    const word = input.value.trim(); // ვიღებთ შეყვანილ სიტყვას

    if (word === "") {
        output.textContent = "Please enter a word.";
        return;
    }

    // სიტყვის უკუღმა გადაბრუნება
    const reversed = word.split("").reverse().join("");

    // შედეგის გამოტანა <p> ელემენტში
    output.textContent = reversed;
}

//  ღილაკზე click → გამოძახება reverseWord()
document.getElementById("reverseBtn").addEventListener("click", reverseWord);

/*

- input.value იღებს შეყვანილ სიტყვას.
- .split("") → ხდის სტრიქონს სიმბოლოების მასივად.
- .reverse() → აბრუნებს მასივს უკუღმა.
- .join("") → აერთიანებს მასივს სტრიქონად.
- შედეგი გადაეცემა <p> ელემენტს.
*/
