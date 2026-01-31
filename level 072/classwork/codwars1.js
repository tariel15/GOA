
//https://www.codewars.com/kata/581e014b55f2c52bb00000f8/train/javascript
function decipherThis(text) {
  let words = text.split(' ')
  let result = []

  for (let word of words) {
    let num = ''
    let i = 0
    while (i < word.length && '0123456789'.includes(word[i])) {
      num += word[i]
      i++
    }
    let firstChar = String.fromCharCode(Number(num))
    let rest = word.slice(i).split('')
    if (rest.length > 1) {
      let temp = rest[0]
      rest[0] = rest[rest.length - 1]
      rest[rest.length - 1] = temp
    }
    result.push(firstChar + rest.join(''))
  }

  return result.join(' ')
}