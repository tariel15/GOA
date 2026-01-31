//https://www.codewars.com/kata/527e4141bb2ea5ea4f00072f/train/javascript
function twistedSum(n) {
  let result = 0; 
  for (let i = 1; i <= n; i++) {
    let j = i; 
    while (j > 0) {
      result += j % 10; 
      j = Math.floor(j / 10);
    }
  }
  return result; 
}