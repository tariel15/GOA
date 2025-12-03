//https://www.codewars.com/kata/5626b561280a42ecc50000d1/train/javascript
function sumDigPow(a, b) {
  var resultArr = [];
  var tempString = [];
  var sum;
  
  for(var i = a; i < b; i++){
    sum = 0;
    tempString = ("" + i).split("");
    for(var j = 0; j < tempString.length; j++)
      sum += Math.pow(tempString[j], j+1);
    if(sum === i)
      resultArr.push(i);   
  }
  return resultArr;
}