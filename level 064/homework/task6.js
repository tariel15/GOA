function signIn() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Please fill in both fields.");
    } else {
        alert(`Signing in as ${email}`);
        // You can add real authentication here
    }
}
