#https://www.codewars.com/kata/59a9919107157a45220000e1/train/python
def find_all(array, n):
    result=[]
    for i in range(len(array)):
        if array[i] ==n:
            result.append(i)
    return result