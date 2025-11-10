document.getElementById("signup-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    const user = Object.fromEntries(formData.entries());
    alert(`Welcome, ${user.firstName}! Your free trial has started.`);
});
