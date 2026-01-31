
function Student(name, age, grade, active) {
    this.name = name;
    this.age = age;
    this.grade = grade;
    this.active = active;

    this.promote = function () {
        if (this.grade < 12) {
            this.grade++;
            console.log(`${this.name} აიწია ${this.grade} კლასში.`);
        } else {
            console.log(`${this.name} უკვე毕业და (დაასრულა სკოლა)!`);
        }
    };
}

const student1 = new Student("ანა", 15, 9, true);
const student2 = new Student("გიო", 17, 12, true);
const student3 = new Student("ნიკა", 14, 8, false);

student1.promote();
student2.promote();
student3.promote();

console.log("სტუდენტები:");
console.log(student1);
console.log(student2);
console.log(student3);