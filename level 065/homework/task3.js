//  ობიექტი teacher თავისი თვისებებითა და მეთოდით
const teacher = {
    name: "Mariam",
    subject: "Mathematics",
    experience: 10,

    //  მეთოდი greet() აჩვენებს საგანს alert-ით
    greet: function () {
        alert("Hello, I teach " + this.subject);
    }
};

//  ღილაკზე დაჭერისას გამოიძახება greet() მეთოდი
document.getElementById("greetBtn").addEventListener("click", function () {
    teacher.greet();
});

/*
- name, subject, experience არის properties (მახასიათებლები)
- greet() არის method (ქმედება), რომელიც alert-ით აჩვენებს ტექსტს
- this.subject მიუთითებს teacher ობიექტის subject თვისებაზე
ღილაკზე დაჭერისას ვიძახებთ teacher.greet()
*/
