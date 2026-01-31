#https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc/train/python
def factorial(n):
    output = 1
    if n > 12 or n < 0:
        raise ValueError
    else:
        for x in range(1, n+1):
            output *= x
        return output