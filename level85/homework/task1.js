
const data = [
    { id: 1, name: "Giorgi", balance: 1500 },
    { id: 2, name: "Nino", balance: 2200 },
    { id: 3, name: "Lasha", balance: 890 }
];
localStorage.setItem("users", JSON.stringify(data));
const returnedData = JSON.parse(localStorage.getItem("users"));
const output = document.getElementById("output");

returnedData.forEach(user => {
    const item = document.createElement("p");
    item.textContent = `ID: ${user.id}, Name: ${user.name}, Balance: ${user.balance}`;
    output.appendChild(item);
});
