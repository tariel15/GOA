//http://codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript
function removeSmallest(numbers) {
  const min = Math.min.apply(this, numbers);
  return numbers.filter((num, idx, arr) => idx !== arr.indexOf(min));
}