#https://www.codewars.com/kata/523f5d21c841566fde000009/train/python
def array_diff(a, b):
    #your code here
    for i in range(len(b)):
        while b[i] in a:
            a.remove(b[i])
    return a