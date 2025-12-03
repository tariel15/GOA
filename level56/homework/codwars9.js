// /https://www.codewars.com/kata/559590633066759614000063/train/javascript
	function minMax(arr) {
		var a = arr.sort(function(a,b) {return a-b});
		return [a[0], a[a.length-1]];
	}