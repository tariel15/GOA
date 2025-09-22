function getCity() {
    const city = prompt("Enter your city");
    document.getElementById("cityOut").textContent = city;
}

document.getElementById("cityBtn").addEventListener("click", getCity);