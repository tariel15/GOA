
const studentsMap = new Map();
studentsMap.set("Ana", 95);
studentsMap.set("Giorgi", 88);
studentsMap.set("Nino", 92);
studentsMap.set("Luka", 76);
studentsMap.set("Mariam", 89);

console.log("Nino-ს ქულა:", studentsMap.get("Nino"));
console.log("არსდება თუ არა Luka:", studentsMap.has("Luka"));
console.log("არსდება თუ არა Teko:", studentsMap.has("Teko"));
studentsMap.delete("Luka");
console.log("დარჩენილი სტუდენტები:");
for (const [name, score] of studentsMap) {
    console.log(name, score);
}
