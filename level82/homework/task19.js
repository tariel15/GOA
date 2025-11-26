const searchForm = document.getElementById("searchForm");
const usernameInput = document.getElementById("username");
const userCard = document.getElementById("userCard");
const errorMsg = document.getElementById("errorMsg");

searchForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = usernameInput.value.trim();

    if (!username) return;

    userCard.classList.add("hidden");
    errorMsg.classList.add("hidden");

    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) throw new Error("User not found");

        const data = await response.json();
        displayUser(data);
    } catch (err) {
        errorMsg.textContent = err.message;
        errorMsg.classList.remove("hidden");
    }
});

function displayUser(user) {
    document.getElementById("avatar").src = user.avatar_url;
    document.getElementById("name").textContent = user.name || "No Name";
    document.getElementById("login").textContent = `@${user.login}`;
    document.getElementById("bio").textContent = user.bio || "No bio available";
    document.getElementById("repos").textContent = user.public_repos;
    document.getElementById("followers").textContent = user.followers;
    document.getElementById("following").textContent = user.following;
    document.getElementById("location").textContent = user.location || "";
    document.getElementById("blog").textContent = user.blog || "";
    document.getElementById("twitter").textContent = user.twitter_username || "";

    userCard.classList.remove("hidden");
}
