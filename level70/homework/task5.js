
function Employee(name, position, salary, active) {
    this.name = name;
    this.position = position;
    this.salary = salary;
    this.active = active;
    this.raiseSalary = function () {
        const increase = this.salary * 0.10;
        this.salary += increase;
        console.log(`${this.name}-ს ხელფასი გაიზარდა 10%-ით. ახალი ხელფასი: ${this.salary.toFixed(2)} ₾`);
    };
}

const employees = [
    new Employee("მარიამი", "დეველოპერი", 3000, true),
    new Employee("გიორგი", "დიზაინერი", 2500, true),
    new Employee("ნინო", "მენეჯერი", 2800, false)
];

for (let i = 0; i < employees.length; i++) {
    employees[i].raiseSalary();
}
console.log("განახლებული თანამშრომლების მონაცემები:");
console.log(employees);
