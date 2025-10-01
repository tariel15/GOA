const choices = ["rock", "paper", "scissors"];
const resultBtn = document.getElementById("result");
const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const computerChoiceP = document.getElementById("computer-choice");

let userScore = 0;
let computerScore = 0;

document.querySelectorAll(".choice").forEach(choice => {
    choice.addEventListener("click", () => {
        const userChoice = choice.id;
        const computerChoice = getComputerChoice();
        const winner = getWinner(userChoice, computerChoice);

        computerChoiceP.innerText = `Computer chose ${computerChoice}`;

        if (winner === "user") {
            userScore++;
            resultBtn.innerText = "You won!";
        } else if (winner === "computer") {
            computerScore++;
            resultBtn.innerText = "You lost!";
        } else {
            resultBtn.innerText = "It's a draw!";
        }

        userScoreSpan.innerText = userScore;
        computerScoreSpan.innerText = computerScore;
    });
});

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function getWinner(user, computer) {
    if (user === computer) return "draw";

    if (
        (user === "rock" && computer === "scissors") ||
        (user === "paper" && computer === "rock") ||
        (user === "scissors" && computer === "paper")
    ) {
        return "user";
    } else {
        return "computer";
    }
}
