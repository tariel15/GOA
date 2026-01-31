#https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/python
def digitize(n):
    i=str(n)
    good=[]
    
    for x in i:
        good.append(int(x))
    return good[::-1]