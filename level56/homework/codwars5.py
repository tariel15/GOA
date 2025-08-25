#https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/python
def array_plus_array(arr1,arr2):
    counter = 0
    for i in arr1:
        counter += i
    for i in arr2:
        counter += i
    return counter