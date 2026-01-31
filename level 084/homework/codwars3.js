//https://www.codewars.com/kata/5469e0798a3502f4a90005c9/train/javascript
function rotate(data, n) {
    let length = data.length
    if (data.length == 0) {
        return []
    }
    n = n % length
    if (n < 0) {
        n = n + length
    }
    let right = data.slice(length - n)
    let left = data.slice(0, length - n)
    return right.concat(left)
}