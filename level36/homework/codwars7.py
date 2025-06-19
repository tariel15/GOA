#https://www.codewars.com/kata/57aa218e72292d98d500240f/train/python
from math import sqrt

def heron(a, b, c):
    s = (a + b + c) / 2

    heron = sqrt(s * (s - a) * (s - b) * (s - c))
    return heron