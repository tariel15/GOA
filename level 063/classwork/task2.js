// 2) შექმენით სათაური, შესატანი ველი და ღილაკი. როდესაც მოხდება ღილაკზე დაჭერა სათურის ტექსტი უნდა განახლდეს და გახდეს <Hello მომხმარებლის სახელი> გამოიყენეთ external javascript და ყველაფერი ახსენით კომენტარებით

const userInput = document.getElementById("userName")

const h1 = document.getElementById("h1")
const submitBtn = document.getElementById("mysubmit")


function getUsername () {
    let userName = userInput.value;
    h1.textContent = "hello " + userName;

}

submitBtn.onclick = getUserame()