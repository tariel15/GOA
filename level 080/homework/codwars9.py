#https://www.codewars.com/kata/51e04f6b544cf3f6550000c1/train/python
def beeramid(bonus, price):
    beers  = bonus // price
    levels = 0
    
    while beers >= (levels + 1) ** 2:
        levels += 1
        beers  -= levels ** 2
    
    return levels