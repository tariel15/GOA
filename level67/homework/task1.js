function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (name === "" || email === "" || password === "") {
        alert("გთხოვთ შეიყვანოთ ყველა ინფორმაცია!");
    } else {
        alert("მონაცემები წარმატებით არის გაგზავნილი!");
    }
}
