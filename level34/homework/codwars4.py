#https://www.codewars.com/kata/5715eaedb436cf5606000381/train/python
def positive_sum(arr):
    sum=0
    for num in arr:
        if num >0:
            sum += num
    return sum