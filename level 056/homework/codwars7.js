// /https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript
function maskify(cc) {
  cc = cc.split("");
  for(var i = 0; i < cc.length - 4; i++){
    cc[i] = "#";
}

cc = cc.join("");
return cc
}