const form = document.getElementById("searchForm");
const input = document.getElementById("searchInput");
const result = document.getElementById("result");
async function fetchInfo(searchText) {
    const url = `https://dummyjson.com/posts?q=${searchText}`;

    try {
        const res = await fetch(url);
        const data = await res.json();
        return data.posts;
    } catch (err) {
        console.error("API ERROR:", err);
        return [];
    }
}
function renderInfo(posts) {
    result.innerHTML = "";
    if (posts.length === 0) {
        result.innerHTML = `<p class="no-result">No posts found.</p>`;
        return;
    }
    for (const post of posts) {
        const div = document.createElement("div");
        div.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <p><strong>Views:</strong> ${post.views}</p>
            <p><strong>Tags:</strong> ${post.tags.join(", ")}</p>
        `;

        result.appendChild(div);
    }
}
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const text = input.value.trim().toLowerCase();
    if (!text) return;
    const posts = await fetchInfo(text);
    const filtered = posts.filter(post =>
        post.title.toLowerCase().includes(text)
    );
    renderInfo(filtered);
});
