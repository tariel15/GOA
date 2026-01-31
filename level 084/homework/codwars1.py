#https://www.codewars.com/kata/5b817c2a0ce070ace8002be0/train/python (Tic Tac Toe) N1
def display_board(board, width):
    r = []
    for i in range(0, len(board), width):
        r += [' ' + ' | '.join(board[i:i+width]) + ' ']
        r += ['-'*(len(r[-1]))]
    return '\n'.join(r[:-1])