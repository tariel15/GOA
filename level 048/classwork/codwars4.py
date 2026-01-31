#https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/python
def accum(st):
    elements=[]
    for index,char in enumerate(st):
        string = (index +1) * char
        elements.append(string.capitalize())
    return "-".join(elements)