#https://www.codewars.com/kata/550f22f4d758534c1100025a/train/python
def dirReduc(arr):
    opposites = [{'NORTH', 'SOUTH'}, {'EAST', 'WEST'}]
    
    for i in range(len(arr)-1):
        if set(arr[i:i+2]) in opposites:
            del arr[i:i+2]
            return dirReduc(arr)
    
    return arr 