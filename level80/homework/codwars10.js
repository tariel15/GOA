//https://www.codewars.com/kata/51edd51599a189fe7f000015/train/javascript
var solution = function(firstArray, secondArray) {

  var arr = [];

  for (var i = 0; i < firstArray.length; i++) {
    arr.push(Math.pow(secondArray[i] - firstArray[i], 2));
  }
  return arr.reduce((a,b) => a+b)/arr.length;

}