//https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript
function getGrade(...scores) {
  let average = scores.reduce((a, b) => a + b) / scores.length
  
  if (average >= 90) return 'A'
  else if (average >= 80) return 'B'
  else if (average >= 70) return 'C'
  else if (average >= 60) return 'D'
  else return 'F'
}