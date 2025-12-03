//https://www.codewars.com/kata/5297bf69649be865e6000922/train/javascript
function makeSentence(parts) {
  return parts.reduce(function(a,b){
    return b === ","? a + b : b === "."? a + "" : a + " " + b;
  }) + ".";
}