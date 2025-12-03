//https://www.codewars.com/kata/5282b48bb70058e4c4000fa7/train/javascript
function hexStringToRGB(h) {
  return {
    r: parseInt(h.slice(1,3), 16),
    g: parseInt(h.slice(3,5), 16),
    b: parseInt(h.slice(5,7), 16)
  };  
}