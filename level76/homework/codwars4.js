//https://www.codewars.com/kata/5938f5b606c3033f4700015a/train/javascript
function alphabetWar(fight) {
  let left = 0;
  let right = 0;

  fight
    .split('')
    .reduce((prev, next, index, arr) => {
      if (next === '*') {
        if (arr[index - 1]) arr[index - 1] = '_';
        if (arr[index + 1] && arr[index + 1] !== '*') arr[index + 1] = '_';
        arr[index] = '_';
      }
      
      return arr;
    }, null)
    .forEach((item) => {
      if (item === 'w') left += 4;
      if (item === 'p') left += 3;
      if (item === 'b') left += 2;
      if (item === 's') left += 1;
      if (item === 'm') right += 4;
      if (item === 'q') right += 3;
      if (item === 'd') right += 2;
      if (item === 'z') right += 1;
    });
  
  if (left > right) return 'Left side wins!';
  if (left < right) return 'Right side wins!';
  return "Let's fight again!";
}
function alphabetWar(fight) {
  let left = 0;
  let right = 0;

  fight
    .split('')
    .reduce((prev, next, index, arr) => {
      if (next === '*') {
        if (arr[index - 1]) arr[index - 1] = '_';
        if (arr[index + 1] && arr[index + 1] !== '*') arr[index + 1] = '_';
        arr[index] = '_';
      }
      
      return arr;
    }, null)
    .forEach((item) => {
      if (item === 'w') left += 4;
      if (item === 'p') left += 3;
      if (item === 'b') left += 2;
      if (item === 's') left += 1;
      if (item === 'm') right += 4;
      if (item === 'q') right += 3;
      if (item === 'd') right += 2;
      if (item === 'z') right += 1;
    });
  
  if (left > right) return 'Left side wins!';
  if (left < right) return 'Right side wins!';
  return "Let's fight again!";
}