//https://www.codewars.com/kata/586a933fc66d187b6e00031a/train/javascript
function generateName() {
  while (true) {
		var newStr = generator();
		if (photoManager.nameExists(newStr)) {
			continue;
		} else {
			return newStr;
		};
	};
	
	function generator() {
			var arr = ["A","B","C","D","I","F","G","K","M","O","P","Q","S","U"];
			var str = '';

			for (var i = 0; i < 6; i++) {
				str = str + arr[Math.round((Math.random()*13))];
			}
			return str;
	};
}