// ვპოულობთ საჭირო ელემენტებს
const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
// ვუსმენთ ფორმის გაგზავნას (submit მოვლენას)
form.addEventListener("submit", function (event) {
    event.preventDefault(); // ვაჩერებთ გვერდის refresh-ს
    // ვიღებთ ტექსტს input-დან
    const taskText = input.value.trim();
    if (taskText === "") return; // არაფრის შეყვანისას არაფერი მოხდეს
    // ვქმნით ახალ <li> ელემენტს
    const li = document.createElement("li");
    // ვქმნით ტექსტურ ნოდს
    const textNode = document.createTextNode(taskText);
    // ვამატებთ ტექსტს li-ში
    li.appendChild(textNode);
    // ვქმნით ღილაკს "შესრულებულია"
    const doneBtn = document.createElement("button");
    doneBtn.textContent = "შესრულებულია";
    // ვამატებთ ღილაკს li-ში
    li.appendChild(doneBtn);
    // ვამატებთ li-ს სიაში (ul)
    taskList.appendChild(li);
    // ვასუფთავებთ input ველს
    input.value = "";
    // ვუსმენთ ღილაკზე დაჭერას (addEventListener თითო li-სთვის)
    doneBtn.addEventListener("click", function () {
        // ამ კონკრეტული ღილაკის მშობელი ელემენტი არის ის <li>,
        // რომელზეც ღილაკი მდებარეობს.
        // parentElement გვაძლევს წვდომას სწორედ იმ <li>-ზე.
        const parentLi = doneBtn.parentElement;
        // ვამატებთ CSS კლასს, რომელიც ტექსტს გადახაზავს
        parentLi.classList.toggle("done");
    });
});
