//https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript
function toCamelCase(str){
      var regExp=/[-_]\w/ig;
      return str.replace(regExp,function(match){
            return match.charAt(1).toUpperCase();
       });
}