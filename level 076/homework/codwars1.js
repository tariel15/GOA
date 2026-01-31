/*https://www.codewars.com/kata/520d9c27e9940532eb00018e/train/javascript
*/
function solution() {
  for (var map = new Map(), i = arguments.length; i--;) {
    if (map.has(arguments[i])) return true
    map.set(arguments[i], 1)
  }
  return false
}