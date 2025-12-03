//https://www.codewars.com/kata/528d36d7cc451cd7e4000339/train/javascript
function mostMoney(s) {
  s.sort((x,y)=>sum(y)-sum(x));
  if(s.length>1 && sum(s[0])==sum(s[1]))return 'all';
  return s[0].name;
}

const sum = (s) => (s.fives*5)+(s.tens*10)+(s.twenties*20);