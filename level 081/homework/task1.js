
const dynamicKey = "id";
const user = {
    [dynamicKey]: 101,
    username: "tarieli",
    email: "tariel@example.com",
    score: 10,
    increaseScore(amount) {
        this.score += amount;
    }
};
function displayScore() {
    document.getElementById("scoreDisplay").textContent = "Score: " + user.score;
}
document.getElementById("increaseBtn").addEventListener("click", () => {
    user.increaseScore(5);
    displayScore();
});
displayScore();
