let a = 20;
let b = a;
b = 30;
console.log(a);

let user1 = { name: "ani" };
let user2 = user1;
user2.name = "tariel";
console.log(user1.name);

function toDO() {
    toDO()

}
// Memory leak - როდესაც ვერ იძებნება საკმარისი მეხსიერება, მეხსიერება იტვირთება და გადაივსება