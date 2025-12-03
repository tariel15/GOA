#https://www.codewars.com/kata/5a63948acadebff56f000018/train/python
def maxProduct (lst, n):
    from functools import reduce
    from operator import mul
    return reduce(mul, sorted(lst, reverse=True)[:n])