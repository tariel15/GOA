document.getElementById("lengthBtn").onclick = () => {
    const word = document.getElementById("wordInput").value.trim();
    document.getElementById("wordOut").textContent =
        word ? `Length: ${word.length}` : "Please enter a word";
};