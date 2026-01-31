//https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/javascript
String.prototype.sortLetters = function() {
  return this.toLowerCase().split('').sort().join('');
}

var isAnagram = function(test, original) {
  return test.sortLetters() == original.sortLetters();
};