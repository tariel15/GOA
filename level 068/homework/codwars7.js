//https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript
function solution(str){
  var i = 0;
  var result = new Array();
  if (str.length % 2 !== 0) {
    str = str + '_';
  }
  while (i < str.length) {
      result.push(str[i] + str[i+1]);
      i += 2;
    }
  return result;
}