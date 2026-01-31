const postList = document.getElementById("postList");
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {თ
        return response.json();
    })
    .then(data => {
        const firstFive = data.slice(0, 5);
        firstFive.forEach(post => {
            const li = document.createElement("li");
            li.textContent = post.title;
            postList.appendChild(li);
        });
    })
    .catch(error => {
        console.error("Fetch error:", error);
    });
