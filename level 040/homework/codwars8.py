#https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/python
def find_short(s):
    s=s.split()
    lenght=[]
    
    for char in s:
        lenght.append(len(char))
    return min(lenght)