
const saveUser = () => {
    const name = document.getElementById("username").value;
    localStorage.setItem("savedName", name);
    alert("User saved!");
};
const loadUser = () => {
    const savedName = localStorage.getItem("savedName");
    document.getElementById("display").textContent = savedName
        ? `Saved User: ${savedName}`
        : "No saved user found!";
};