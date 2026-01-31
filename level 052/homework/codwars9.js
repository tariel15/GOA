//https://www.codewars.com/kata/57f609022f4d534f05000024/train/javascript
function stray(numbers){
  for (var i in numbers){
     if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
  }
}