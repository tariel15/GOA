#https://www.codewars.com/kata/51edd51599a189fe7f000015/train/python
def solution(array_a, array_b):
    k=[]
    a=len(array_a)
    b=len(array_b)
    if a==b:
        for i in range(a):
            k.append((abs(array_a[i]-array_b[i])**2))
        l1=sum(k)
        r=l1/a
        return r