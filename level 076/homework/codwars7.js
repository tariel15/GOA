//https://www.codewars.com/kata/527e4141bb2ea5ea4f00072f/train/javascript
function twistedSum(n) {
  let out = 0;
  for (let i = 1; i <= n; i++) {
    if (i.toString().length > 1) {
      i.toString().split('').forEach(el => {
        out += parseInt(el);
      })
    } else {
      out += i;
    }
  }
  return out;
}