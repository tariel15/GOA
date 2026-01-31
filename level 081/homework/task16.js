
class Student {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }

    info() {
        console.log(`${this.name} scored ${this.score}`);
    }
}

class RankedStudent extends Student {
    constructor(name, score, rank) {
        super(name, score);
        this.rank = rank;
    }

    static sortStudents(students) {
        return students.sort((a, b) => a.rank - b.rank);
    }
}

const student1 = new RankedStudent("Alice", 90, 2);
const student2 = new RankedStudent("Bob", 95, 1);
const student3 = new RankedStudent("Charlie", 85, 3);

const students = [student1, student2, student3];

console.log("Before sorting:");
students.forEach(s => console.log(`${s.name} - Rank: ${s.rank}`));

const sortedStudents = RankedStudent.sortStudents(students);

console.log("After sorting:");
sortedStudents.forEach(s => console.log(`${s.name} - Rank: ${s.rank}`));
