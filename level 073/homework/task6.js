
const noteInput = document.getElementById("noteInput");
const addBtn = document.getElementById("addBtn");
const notesList = document.getElementById("notesList");
addBtn.addEventListener("click", () => {
    const noteText = noteInput.value.trim();

    if (noteText === "") {
        alert("გთხოვ შეიყვანე ტექსტი!");
        return;
    }
    const li = document.createElement("li");
    li.textContent = noteText;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "წაშლა";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => {
        li.remove();
    });
    li.appendChild(deleteBtn);
    notesList.appendChild(li);
    noteInput.value = "";
});
