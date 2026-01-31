#https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/python
def sum_array(arr):
    return sum(sorted(arr)[1:-1]) if arr and len(arr) > 1 else 0