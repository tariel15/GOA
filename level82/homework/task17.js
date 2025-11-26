console.log("===== TASK 17: Filter >50 and halve numbers =====");
const numArr = [12, 55, 70, 45, 90, 33, 60];
const over50 = numArr.filter(num => num > 50);
console.log("Numbers > 50:", over50);
const halvedNumbers = over50.map(num => num / 2);
console.log("Halved numbers:", halvedNumbers);