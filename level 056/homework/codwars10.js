//https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript
var capitals = function (word) {
  var caps = [];
	for(var i = 0; i < word.length; i++) {
    if(word[i].toUpperCase() == word[i]) caps.push(i);
  }
  return caps;
};