function calculateGrade() {
    const examInput = prompt("შეიყვანეთ გამოცდის ქულა:");
    const activityInput = prompt("შეიყვანეთ აქტიურობის ქულა:");

    const exam = Number(examInput);
    const activity = Number(activityInput);

    if (isNaN(exam) || isNaN(activity)) {
        document.getElementById("result").innerText = "გთხოვთ, შეიყვანოთ სწორი რიცხვები.";
        return;
    }

    const total = exam + activity;
    let grade = "";

    if (total >= 90 && total <= 100) {
        grade = "A";
    } else if (total >= 80) {
        grade = "B";
    } else if (total >= 70) {
        grade = "C";
    } else if (total >= 50) {
        grade = "D";
    } else if (total >= 30) {
        grade = "E";
    } else {
        grade = "F";
    }

    document.getElementById("result").innerText = `ჯამური ქულა: ${total}, შეფასება: ${grade}`;
}
