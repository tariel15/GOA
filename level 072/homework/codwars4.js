//https://www.codewars.com/kata/5ab6538b379d20ad880000ab/train/javascript
const areaOrPerimeter = function(l , w) {
  if (w == l) {
    return w * l;
  }
    else {
      return 2*l+2*w;
    }
};