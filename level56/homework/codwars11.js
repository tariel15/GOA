//https://www.codewars.com/kata/526c7363236867513f0005ca/train/javascript
function isLeapYear(year) {
  if(0 == year%400) return true;
  if(0 == year%100) return false;
  if(0 == year%4) return true;
  return false;
}