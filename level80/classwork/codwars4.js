//https://www.codewars.com/kata/635fc0497dadea0030cb7936/train/javascript
const countDifferentMatrices = matrices => {
  const isNew = (seen => ([a, b, c, d]) =>
    (str => ![0, 1, 2, 3].some(i => str.slice(i) + str.slice(0, i) in seen)
               &&
             (seen[str] = true)
    )('' + a + b + d + c))({});
  
  return matrices.filter(isNew).length;
}