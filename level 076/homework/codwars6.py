#https://www.codewars.com/kata/527e4141bb2ea5ea4f00072f/train/python
def compute_sum(n):
    sum = 0
    for x in range(n+1):
        if x < 10:
            sum += x
        else:
            for n in str(x):
                sum += int(n)
    return sum