#https://www.codewars.com/kata/52f3149496de55aded000410/train/python
def sum_digits(number):
    return sum(map(int, str(abs(number))))