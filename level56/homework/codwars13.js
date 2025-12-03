//https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript
function digital_root(n){
    n = eval(n.toString().split('').join('+'));

    if (n > 9) {
        return digital_root(n);
    }

    return n;
}