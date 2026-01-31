//https://www.codewars.com/kata/5a63948acadebff56f000018/train/javascript
function maxProduct(numbers, size){
  return numbers
  .sort((a, b) => b - a)
  .slice(0, size)
  .reduce((sum, el) => sum * el, 1);
}