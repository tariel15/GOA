
function Task(title, desc, state, deadline) {
    this.title = title;
    this.desc = desc;
    this.state = state;
    this.deadline = deadline;
    this.completed = false;

    this.complete = function() {
        this.completed = true;
        this.state = "completed";
        console.log(`✅ ამოცანა "${this.title}" დასრულდა.`);
    };
}

const task1 = new Task("study js", "learn about objects", "in progres", "2025-10-15");
const task2 = new Task("workout", "go to the gym", "in-progress", "2025-10-20");
const task3 = new Task("hunting", "go to the forest", "not started", "2025-10-23");

task1.complete();
task2.complete();
task3.complete();

console.log(task1);
console.log(task2);
console.log(task3);
