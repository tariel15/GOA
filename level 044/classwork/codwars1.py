#https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/python
def Descending_Order(num):
    s = str(num)
    s = list(s)
    s = sorted(s)
    s = reversed(s)
    s = ''.join(s)
    return int(s)