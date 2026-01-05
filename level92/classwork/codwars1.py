#https://www.codewars.com/kata/59fa8e2646d8433ee200003f/train/python
def sort_by_bit(arr):
    arr.sort(key=lambda x:(bin(x).count('1'), x))

    return arr