#https://www.codewars.com/kata/5663f5305102699bad000056/train/python
def mxdiflg(a1, a2):
    if a1 and a2:
        return max(abs(len(x) - len(y)) for x in a1 for y in a2)
    return -1