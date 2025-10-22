//https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript
String.prototype.toJadenCase = function() {
  return this.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
};