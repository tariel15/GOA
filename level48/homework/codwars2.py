#https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/python
def find_average(array):
    if len(array) != 0:
        return sum(array) / len(array)
    else:
        return 0