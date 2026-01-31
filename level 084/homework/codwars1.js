//https://www.codewars.com/kata/5b817c2a0ce070ace8002be0/train/javascript
function displayBoard(board, width){
  let regex = new RegExp(`.{${width}}`,'g');
  return board.join('').match(regex).map(e => ` ${[...e].join(' | ')} `).join(`\n${'-'.repeat(width*3+width-1)}\n`);
}