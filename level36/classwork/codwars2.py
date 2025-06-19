#https://www.codewars.com/kata/582e0e592029ea10530009ce/train/python
def duck_duck_goose(players, goose):
    player_amount = len(players)
    
    if goose > player_amount:
        goose = goose % player_amount
    
    return players[goose - 1].name