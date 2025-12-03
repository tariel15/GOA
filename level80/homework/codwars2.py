#https://www.codewars.com/kata/5626b561280a42ecc50000d1/train/python
def sum_dig_pow(a, b):
    l = []
    for i in range(a,b+1):
        k = 0
        p = str(i)
        for j in range(len(p)):
            k += int(p[j]) ** (j+1)
        if k == i:
            l.append(i)
    return l