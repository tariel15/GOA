#https://www.codewars.com/kata/555eded1ad94b00403000071/train/python
def series_sum(n):
    sum = 0.0
    for i in range(0,n):
        sum += 1 / (1 + 3 * float(i))
    return '%.2f' % sum