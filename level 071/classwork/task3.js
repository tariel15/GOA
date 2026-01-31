
let numbers = [10, 20, 30, 40, 50, 30, 20];
console.log("საწყისი მასივი:", numbers);

// 1. pop() - შლის ბოლო ელემენტს და აბრუნებს მას
let last = numbers.pop();
console.log("pop():", last);
console.log("მასივი pop() შემდეგ:", numbers);

// 2. shift() - შლის პირველ ელემენტს და აბრუნებს მას
let first = numbers.shift();
console.log("shift():", first);
console.log("მასივი shift() შემდეგ:", numbers);

// 3. unshift() - ამატებს ერთ ან რამდენიმე ელემენტს დასაწყისში
numbers.unshift(5, 15);
console.log("unshift(5, 15):", numbers);

// 4. slice() - ქმნის ახალი მასივს მითითებული დიაპაზონით (არ ცვლის ორიგინალს)
let sliced = numbers.slice(1, 4);
console.log("slice(1, 4):", sliced);
console.log("მასივი slice() შემდეგ:", numbers);

// 5. splice() - შლის, ცვლის ან ამატებს ელემენტებს (ცვლის ორიგინალს)
let spliced = numbers.splice(2, 2, 100, 200);
console.log("splice(2, 2, 100, 200):", spliced);
console.log("მასივი splice() შემდეგ:", numbers);

// 6. indexOf() - აბრუნებს ელემენტის პირველ ინდექსს (თუ არ არსებობს -1)
let index = numbers.indexOf(30);
console.log("indexOf(30):", index);

// 7. lastIndexOf() - აბრუნებს ელემენტის ბოლო ინდექსს
let lastIndex = numbers.lastIndexOf(20);
console.log("lastIndexOf(20):", lastIndex);

// 8. includes() - ამოწმებს, შეიცავს თუ არა მასივი მითითებულ მნიშვნელობას
let has100 = numbers.includes(100);
console.log("includes(100):", has100);

// 9. find() - აბრუნებს პირველ ელემენტს, რომელიც აკმაყოფილებს პირობას
let found = numbers.find(num => num > 100);
console.log("find(num > 100):", found); 

// 10. findIndex() - აბრუნებს პირველი შესაბამისი ელემენტის ინდექსს
let foundIndex = numbers.findIndex(num => num === 40);
console.log("findIndex(num === 40):", foundIndex);

console.log("ფინალური მასივი:", numbers);
