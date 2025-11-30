const userList = document.getElementById("userList");
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        return response.json();
    })
    .then(data => {
        data.forEach(user => {
            const li = document.createElement("li");
            li.textContent = `Name: ${user.name}, Email: ${user.email}`;
            userList.appendChild(li);
        });
    })
    .catch(error => {
        console.error("Fetch error:", error);
    });