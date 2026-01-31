
// var — აქვს ფუნქციის ან გლობალური მოქმედების არეალი (function scope / global scope)
var globalVar = "მე ვარ var ცვლადი (გლობალური ან ფუნქციის ფარგლებში)";

// let — აქვს ბლოკის მოქმედების არეალი (block scope)
let blockLet = "მე ვარ let ცვლადი (ბლოკის ფარგლებში)";

// const — მსგავსად let-ისა, ბლოკის ფარგლებში მოქმედებს, მაგრამ მისი მნიშვნელობის შეცვლა შეუძლებელია
const constantValue = "მე ვარ const ცვლადი (მნიშვნელობა უცვლელია)";

console.log(globalVar);
console.log(blockLet);
console.log(constantValue);


function scopeExample() {
    if (true) {
        var functionScoped = "მე ვარ var და ფუნქციის ფარგლებში ვჩანდი";
        let blockScoped = "მე ვარ let და მხოლოდ ამ if ბლოკში ვჩანდი";
        const constBlock = "მე ვარ const და მხოლოდ ამ if ბლოკში ვჩანდი";
        console.log(functionScoped); // მუშაობს
        console.log(blockScoped);   // მუშაობს
        console.log(constBlock);    // მუშაობს
    }
    console.log(functionScoped); // მუშაობს, რადგან var ფუნქციის ფარგლებშია
    // console.log(blockScoped); //  შეცდომა — blockScoped არ ჩანს ბლოკის გარეთ
    // console.log(constBlock);  //  შეცდომა — constBlock არ ჩანს ბლოკის გარეთ
}

scopeExample();

// გარე ცვლადი
let outerVar = "მე ვარ გარე ცვლადი";
function outerFunction() {
    let innerVar = "მე ვარ outerFunction-ის შიდა ცვლადი";
    function innerFunction() {
        // შიდა ფუნქციას აქვს წვდომა გარე ფუნქციის და გლობალურ ცვლადებზე
        console.log(outerVar);  // ხედავს გარე (lexical) ცვლადს
        console.log(innerVar);  // ხედავს outerFunction-ის შიდა ცვლადს
    }
    innerFunction(); // ვიძახებთ შიდა ფუნქციას
}

outerFunction();

/*
ლექსიკური ფარგლები ნიშნავს, რომ ფუნქციას "ამახსოვრდება" 
მისი შექმნის ადგილი კოდში და შესაბამისად იცის 
რომელ ცვლადებზე აქვს წვდომა.


- შიდა ფუნქციას ყოველთვის აქვს წვდომა იმ ცვლადებზე,
- რომლებიც განსაზღვრულია მის გარე ფუნქციაში ან გლობალურ არეალში.
- გარე ფუნქციას კი ვერ აქვს წვდომა შიდა ფუნქციის ცვლადებზე.
*/
