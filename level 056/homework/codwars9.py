#https://www.codewars.com/kata/559590633066759614000063/train/python
def min_max(lst):
    min, max = lst[0], lst[0]

    for x in lst:
        if x > max:
            max = x
        elif x < min:
            min = x

    return [min, max]