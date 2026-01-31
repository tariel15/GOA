//https://www.codewars.com/kata/525caa5c1bf619d28c000335/train/javascript (Tic Tac Toe)
function isSolved(board) {
  var row = board;
  var col = [0,1,2].map((i) => [0,1,2].map((h)=>board[h][i]));
  var di1 = [[0,1,2].map((i) => board[i][i])];
  var di2 = [[0,1,2].map((i) => board.reverse()[i][i])];
  var all = row.concat(col,di1,di2);
  if (all.some(x=>""+x=="1,1,1")){return 1;}
  else if (all.some(x=>""+x=="2,2,2")){return 2;}
  else if (all.some(x => x.includes(0))){return -1;}
  else{return 0;};
}