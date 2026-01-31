function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const successMessage = document.getElementById("successMessage");
    successMessage.innerText = "";
    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        alert("გთხოვთ შეავსოთ ყველა ველი!");
        return;
    }

    if (password.length < 8) {
        alert("პაროლი უნდა შეიცავდეს მინიმუმ 8 სიმბოლოს!");
        return;
    }
    if (password !== confirmPassword) {
        alert("პაროლები არ ემთხვევა!");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("გთხოვთ შეიყვანოთ სწორი იმეილი (უნდა შეიცავდეს '@' და '.')");
        return;
    }
    alert("რეგისტრაცია წარმატებულია!");
    successMessage.innerText = `მოგესალმებით, ${name}!`;
}
