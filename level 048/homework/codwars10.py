#https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/python
def binary_array_to_number(arr):
    s = 0
    for digit in arr:
        s = s * 2 + digit

    return s