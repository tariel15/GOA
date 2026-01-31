#https://www.codewars.com/kata/546e2562b03326a88e000020/train/python
def square_digits(num):
    result = ""
    for digit in str(num):
        result += str(int(digit) ** 2)
    return int(result)