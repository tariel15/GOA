//https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript
const pigIt = (str) => {
  console.log(str);
  return str.split(" ").map((item) => {
    let sign = "";
    item =  [...item].filter(it => {
        if(!it.match(/[,.!?;:()]/)) {
          return it;
        }
        sign = it;
      });
     let [first,...rest] = item;
     if(sign !== "" && item.length <= 1) {
       return sign;
     }
      return [...rest,first,"ay"].join("");
  }).join(" ");
}