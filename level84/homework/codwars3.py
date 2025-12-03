#https://www.codewars.com/kata/5469e0798a3502f4a90005c9/train/python
from collections import deque
def rotate(data, n):
    data = deque(data)
    data.rotate(n) 
    return list(data)