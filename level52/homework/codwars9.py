#https://www.codewars.com/kata/57f609022f4d534f05000024/train/python
def stray(arr):
    for x in arr:
        if arr.count(x) == 1:
            return x