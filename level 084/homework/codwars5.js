//https://www.codewars.com/kata/59f70440bee845599c000085/train/javascript
function findHack(arr) {
  let score = {
    A: 30,
    B: 20,
    C: 10,
    D: 5
  }
  function calc(a){
    let bonus = (a.length >= 5 && a.every(g => g == 'A' || g == 'B')) ? 20 : 0;
    return a.map(g => score[g] || 0).reduce((a,b)=>a+b,0)+bonus;
  }
  return arr.filter(a => {
    return a[1] > 200 || calc(a[2]) !== a[1];
  }).map(a => a[0]); 
}