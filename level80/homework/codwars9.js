//https://www.codewars.com/kata/51e04f6b544cf3f6550000c1/train/javascript
// Returns number of complete beeramid levels
var beeramid = function(bonus, price) {
  var beers = Math.floor(bonus / price), levels = 0;
  while(beers >= ++levels * levels) {
    beers -= levels * levels;
  }
  return levels - 1;
}