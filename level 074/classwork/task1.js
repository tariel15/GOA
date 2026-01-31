
// აბრუნებს ყველა ელემენტს, რომელიც მითითებული tag-ისაა (მაგ. div)
let divs = document.getElementsByTagName("div");
console.log("ყველა div:", divs);

// აბრუნებს ყველა ელემენტს კონკრეტული კლასით
let products = document.getElementsByClassName("product");
console.log("ყველა product:", products);

// ავიღოთ პირველი product ელემენტი ID-ით
let firstProduct = document.getElementById("special-product");

// აბრუნებს ელემენტს, რომელიც მოდის შემდეგ DOM სტრუქტურაში
console.log("შემდეგი product:", firstProduct.nextElementSibling);

// აბრუნებს ელემენტს, რომელიც არის წინ არსებული (თუ არსებობს)
console.log("წინა ელემენტი:", firstProduct.previousElementSibling);
// აბრუნებს ელემენტის პირველ შვილს (შეიძლება იყოს ტექსტიც!)
console.log("პირველი შვილი:", firstProduct.firstChild);
// აბრუნებს ელემენტის ბოლო შვილს
console.log("ბოლო შვილი:", firstProduct.lastChild);
