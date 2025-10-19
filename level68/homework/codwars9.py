#https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/python
def find_uniq(arr):
    s = set(arr)
    for e in s:
        if arr.count(e) == 1:
            return e