//https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc/train/javascript
function factorial(n) {
  if (n < 0 || n > 12)
    throw RangeError();
  var f = 1;
  while (n > 1)
    f *= n--;
  return f;
}