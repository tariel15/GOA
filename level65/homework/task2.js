// ფუნქცია ასაკის დასათვლელად და შეფასებისთვის
function checkBirthYear() {
    const input = document.getElementById("yearInput");
    const message = document.getElementById("ageMsg");

    const birthYear = parseInt(input.value);
    const currentYear = new Date().getFullYear();

    // შემოწმება: ცარიელი ან არასწორი წელი
    if (isNaN(birthYear) || birthYear > currentYear || birthYear < 1900) {
        message.textContent = "Please enter a valid birth year.";
        return;
    }

    const age = currentYear - birthYear;

    if (age < 18) {
        message.textContent = "Minor";
    } else {
        message.textContent = "Adult";
    }
}

//  ღილაკზე click → checkBirthYear() გამოძახება
document.getElementById("yearBtn").addEventListener("click", checkBirthYear);

/*
ახსნა:
- input.value იღებს მომხმარებლის შეყვანილ დაბადების წელს.
- new Date().getFullYear() აბრუნებს მიმდინარე წელს.
- ვთვლით ასაკს: currentYear - birthYear
- თუ ასაკი < 18 → Minor
თუ ასაკი ≥ 18 → Adult
- შედეგი იწერება <p id="ageMsg"> ელემენტში
*/
