#https://www.codewars.com/kata/51e704f2d8dbace389000279/train/python
def arrays_similar(arr1, arr2):
    if len(arr1) != len(arr2):
        return False
    
    dict1 = {}
    dict2 = {}
    
    for elem in arr1:
        dict1[elem] = dict1.get(elem, 0) + 1
    
    for elem in arr2:
        dict2[elem] = dict2.get(elem, 0) + 1
    
    return dict1 == dict2