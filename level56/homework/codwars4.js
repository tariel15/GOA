//https://www.codewars.com/kata/56b1f01c247c01db92000076/train/javascript
function doubleChar(str) {
	var word = '';
  for (var i = 0; i < str.length; i++){
  	word = word + str[i] + str[i];
  };
  return word;
};