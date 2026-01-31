//https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

function spinWords(words){
  return words.split(' ').map(function (word) {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ');
}