//https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript
function longest(s1, s2) {
  return Array.from(new Set(s1 + s2)).sort().join('');
}