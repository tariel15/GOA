const addbtn = document.querySelector("button");
const taskinput = document.getElementById("task");
const task = document.querySelector("ul");
addbtn.onclick = function(){
    let newTask = document.createElement("li");
    let completed = document.createElement("input");
    completed.type = "checkbox";
    newTask.innerText = taskinput.value;
    newTask.appendChild(completed);
    newTask.onclick = function(){
        newTask.style.color = "green";}
        task.appendChild(newTask);
}